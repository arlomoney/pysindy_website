import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Play, Download, Github, Book, Zap, Users, CheckCircle, AlertCircle, Code, Terminal, Lightbulb, Rocket, Star, ArrowRight } from 'lucide-react';

const PySINDyDocs = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedDemo, setSelectedDemo] = useState('lorenz');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Book },
    { id: 'installation', label: 'Installation', icon: Download },
    { id: 'quickstart', label: 'Quick Start', icon: Rocket },
    { id: 'demos', label: 'Live Demos', icon: Play },
    { id: 'tutorials', label: 'Tutorials', icon: Lightbulb },
    { id: 'api', label: 'API Reference', icon: Code },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const demoOptions = [
    { id: 'lorenz', name: 'Lorenz System', description: 'Classic chaotic attractor' },
    { id: 'pendulum', name: 'Nonlinear Pendulum', description: 'Simple mechanical system' },
    { id: 'vanderpol', name: 'Van der Pol Oscillator', description: 'Self-sustaining oscillation' }
  ];

  const faqItems = [
    {
      q: 'What Python versions are supported?',
      a: 'pySINDy supports Python 3.7 and higher. We recommend using Python 3.8+ for optimal performance and compatibility with all features.'
    },
    {
      q: 'Do I need specific versions of NumPy or SciPy?',
      a: 'pySINDy requires NumPy ≥ 1.16 and SciPy ≥ 1.0.0. For best performance, we recommend the latest stable versions. The package will automatically install compatible versions if you use pip.'
    },
    {
      q: 'Can I use pySINDy with GPU acceleration?',
      a: 'While pySINDy doesn\'t directly support GPU computation, you can use it with NumPy backends that support GPU acceleration like CuPy for certain operations.'
    },
    {
      q: 'How do I handle noisy data?',
      a: 'pySINDy includes several noise-robust optimization methods like SR3, STLSQ with thresholding, and ensemble methods. See the noise handling tutorial for detailed examples.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">pySINDy</h1>
                <p className="text-xs text-slate-600">Sparse Identification of Nonlinear Dynamics</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/dynamicslab/pysindy" className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-700 hover:text-blue-600 transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <nav className="w-64 min-h-screen bg-white/50 backdrop-blur-sm border-r border-slate-200/50 p-6 sticky top-16">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-16">
          {/* Overview Section */}
          <section id="overview" className="space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100/80 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Data-Driven Discovery</span>
              </div>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                Discover Hidden
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Dynamics</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                pySINDy is a comprehensive Python package for identifying governing equations from data using sparse regression techniques. Perfect for scientists, engineers, and researchers working with dynamical systems.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button 
                  onClick={() => scrollToSection('installation')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Install Now</span>
                </button>
                <button 
                  onClick={() => scrollToSection('demos')}
                  className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
                >
                  <Play className="w-4 h-4" />
                  <span>Try Demo</span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Sparse Regression</h3>
                <p className="text-slate-600">Advanced sparse optimization methods including STLSQ, SR3, and MIOSR for robust model discovery.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Easy Integration</h3>
                <p className="text-slate-600">Scikit-learn compatible API makes it simple to integrate with your existing machine learning workflows.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Extensible</h3>
                <p className="text-slate-600">Modular design allows custom feature libraries, optimizers, and differentiation methods.</p>
              </div>
            </div>
          </section>

          {/* Installation Section */}
          <section id="installation" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Installation Guide</h2>
              <p className="text-lg text-slate-600">Get up and running with pySINDy in minutes</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>System Requirements</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Required Dependencies</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-mono text-sm">Python</span>
                      <span className="text-sm text-slate-600">≥ 3.7</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-mono text-sm">NumPy</span>
                      <span className="text-sm text-slate-600">≥ 1.16</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-mono text-sm">SciPy</span>
                      <span className="text-sm text-slate-600">≥ 1.0.0</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-mono text-sm">scikit-learn</span>
                      <span className="text-sm text-slate-600">≥ 1.0</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Optional Dependencies</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-mono text-sm">matplotlib</span>
                      <span className="text-sm text-slate-600">plotting</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-mono text-sm">gurobipy</span>
                      <span className="text-sm text-slate-600">MIOSR optimizer</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-mono text-sm">cvxpy</span>
                      <span className="text-sm text-slate-600">convex optimization</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-semibold text-slate-900 flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span>Installation Methods</span>
                </h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-mono text-sm">pip install (recommended)</span>
                      <button className="text-slate-400 hover:text-white text-xs">Copy</button>
                    </div>
                    <code className="text-green-400 font-mono">pip install pysindy</code>
                  </div>
                  
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-mono text-sm">conda install</span>
                      <button className="text-slate-400 hover:text-white text-xs">Copy</button>
                    </div>
                    <code className="text-blue-400 font-mono">conda install -c conda-forge pysindy</code>
                  </div>
                  
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-400 font-mono text-sm">development version</span>
                      <button className="text-slate-400 hover:text-white text-xs">Copy</button>
                    </div>
                    <code className="text-purple-400 font-mono text-sm">
                      pip install git+https://github.com/dynamicslab/pysindy.git
                    </code>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-blue-900">Pro Tip</h5>
                    <p className="text-blue-800 text-sm mt-1">
                      We recommend using a virtual environment to avoid dependency conflicts. Use <code className="bg-blue-100 px-1 rounded">python -m venv pysindy-env</code> to create one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Start Section */}
          <section id="quickstart" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Quick Start</h2>
              <p className="text-lg text-slate-600">Your first pySINDy model in 5 minutes</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900">Basic Usage Example</h3>
                
                <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm">
                    <code className="text-slate-300">
{`import numpy as np
import matplotlib.pyplot as plt
from pysindy import SINDy

# Generate training data for the Lorenz system
dt = 0.002
t_train = np.arange(0, 10, dt)
x0_train = [-8, 8, 27]

def lorenz(state, t):
    x, y, z = state
    return [10.0 * (y - x), x * (28.0 - z) - y, x * y - (8.0 / 3.0) * z]

# Integrate the Lorenz equations
from scipy.integrate import odeint
x_train = odeint(lorenz, x0_train, t_train)

# Fit the SINDy model
model = SINDy()
model.fit(x_train, t=dt)

# Print the discovered equations
model.print()

# Make predictions
x_test = model.predict(x_train, t=dt)

# Plot results
plt.figure(figsize=(12, 4))
plt.subplot(131)
plt.plot(t_train, x_train[:, 0], 'b-', label='True')
plt.plot(t_train, x_test[:, 0], 'r--', label='SINDy')
plt.xlabel('Time')
plt.ylabel('x')
plt.legend()
plt.show()`}
                    </code>
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">What this code does:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Generates synthetic data from the Lorenz system</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Fits a SINDy model to discover the equations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Makes predictions and visualizes results</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Expected output:</h4>
                    <div className="bg-slate-50 p-3 rounded-lg font-mono text-sm">
                      <div>x' = -10.000 x + 10.000 y</div>
                      <div>y' = 27.994 x - 0.999 y - 1.000 x z</div>
                      <div>z' = -2.666 z + 1.000 x y</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Live Demos Section */}
          <section id="demos" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Interactive Demos</h2>
              <p className="text-lg text-slate-600">Explore pySINDy capabilities with live examples</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50">
              <div className="flex space-x-4 mb-6">
                {demoOptions.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedDemo === demo.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {demo.name}
                  </button>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {demoOptions.find(d => d.id === selectedDemo)?.name}
                  </h3>
                  <p className="text-slate-600">
                    {demoOptions.find(d => d.id === selectedDemo)?.description}
                  </p>
                  
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-400 font-mono text-sm">Interactive Demo</span>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-medium flex items-center space-x-1">
                        <Play className="w-3 h-3" />
                        <span>Run</span>
                      </button>
                    </div>
                    <div className="h-48 bg-slate-800 rounded flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto">
                          <Play className="w-8 h-8 text-blue-400" />
                        </div>
                        <p className="text-slate-400 text-sm">Click Run to start simulation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900">Discovered Equations</h4>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="font-mono text-sm space-y-1">
                      {selectedDemo === 'lorenz' && (
                        <>
                          <div>dx/dt = -10.000 x + 10.000 y</div>
                          <div>dy/dt = 27.994 x - 0.999 y - 1.000 x z</div>
                          <div>dz/dt = -2.666 z + 1.000 x y</div>
                        </>
                      )}
                      {selectedDemo === 'pendulum' && (
                        <>
                          <div>dθ/dt = ω</div>
                          <div>dω/dt = -9.81 sin(θ)</div>
                        </>
                      )}
                      {selectedDemo === 'vanderpol' && (
                        <>
                          <div>dx/dt = y</div>
                          <div>dy/dt = -x + μ(1 - x²)y</div>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Parameters</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-slate-600">Noise Level</label>
                        <input type="range" min="0" max="0.1" step="0.01" className="w-24" />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-slate-600">Threshold</label>
                        <input type="range" min="0" max="1" step="0.1" className="w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tutorials Section */}
          <section id="tutorials" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Tutorials & Guides</h2>
              <p className="text-lg text-slate-600">Learn pySINDy step by step</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Getting Started',
                  description: 'Learn the basics of SINDy and your first model',
                  level: 'Beginner',
                  time: '15 min',
                  color: 'green'
                },
                {
                  title: 'Handling Noisy Data',
                  description: 'Robust methods for real-world applications',
                  level: 'Intermediate',
                  time: '30 min',
                  color: 'blue'
                },
                {
                  title: 'Custom Feature Libraries',
                  description: 'Extend pySINDy with your own functions',
                  level: 'Advanced',
                  time: '45 min',
                  color: 'purple'
                },
                {
                  title: 'Control Systems',
                  description: 'SINDy for systems with external inputs',
                  level: 'Intermediate',
                  time: '25 min',
                  color: 'blue'
                },
                {
                  title: 'PDE Discovery',
                  description: 'Find governing equations for PDEs',
                  level: 'Advanced',
                  time: '60 min',
                  color: 'purple'
                },
                {
                  title: 'Ensemble Methods',
                  description: 'Improve robustness with multiple models',
                  level: 'Advanced',
                  time: '40 min',
                  color: 'purple'
                }
              ].map((tutorial, i) => (
                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-slate-900">{tutorial.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        tutorial.color === 'green' ? 'bg-green-100 text-green-700' :
                        tutorial.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {tutorial.level}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{tutorial.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{tutorial.time}</span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
                        <span>Start</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* API Reference Section */}
          <section id="api" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">API Reference</h2>
              <p className="text-lg text-slate-600">Complete documentation of classes and methods</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Core Classes</h3>
                  <div className="space-y-2">
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">SINDy</div>
                      <div className="text-xs text-slate-600">Main sparse regression class</div>
                    </a>
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">SINDyPI</div>
                      <div className="text-xs text-slate-600">Physics-informed SINDy</div>
                    </a>
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">SINDY</div>
                      <div className="text-xs text-slate-600">Legacy interface</div>
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Optimizers</h3>
                  <div className="space-y-2">
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">STLSQ</div>
                      <div className="text-xs text-slate-600">Sequential thresholded least squares</div>
                    </a>
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">SR3</div>
                      <div className="text-xs text-slate-600">Sparse relaxed regularized regression</div>
                    </a>
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">MIOSR</div>
                      <div className="text-xs text-slate-600">Mixed-integer optimization</div>
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-900">Feature Libraries</h3>
                  <div className="space-y-2">
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">PolynomialLibrary</div>
                      <div className="text-xs text-slate-600">Polynomial features</div>
                    </a>
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">FourierLibrary</div>
                      <div className="text-xs text-slate-600">Trigonometric functions</div>
                    </a>
                    <a href="#" className="block p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                      <div className="font-mono text-sm font-medium text-slate-900">CustomLibrary</div>
                      <div className="text-xs text-slate-600">User-defined functions</div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Book className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Complete API Documentation</h4>
                    <p className="text-blue-800 text-sm mt-1">
                      Detailed documentation with examples for every class, method, and parameter is available in our comprehensive API guide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section id="community" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Community & Support</h2>
              <p className="text-lg text-slate-600">Join the pySINDy community and get help</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Get Help</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <Github className="w-5 h-5 text-slate-600" />
                    <div>
                      <div className="font-medium text-slate-900">GitHub Issues</div>
                      <div className="text-sm text-slate-600">Bug reports and feature requests</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <Users className="w-5 h-5 text-slate-600" />
                    <div>
                      <div className="font-medium text-slate-900">Discussions</div>
                      <div className="text-sm text-slate-600">Community Q&A and discussions</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors">
                    <Book className="w-5 h-5 text-slate-600" />
                    <div>
                      <div className="font-medium text-slate-900">Stack Overflow</div>
                      <div className="text-sm text-slate-600">Tag your questions with 'pysindy'</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Contribute</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Development</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Help improve pySINDy by contributing code, documentation, or examples.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Contributing Guide →
                    </button>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-medium text-slate-900 mb-2">Research</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Share your research applications and case studies with the community.
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Submit Example →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-200/50">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-medium text-slate-900">{faq.q}</span>
                      {expandedFAQ === index ? (
                        <ChevronDown className="w-4 h-4 text-slate-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4">
                        <p className="text-slate-600 text-sm">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">pySINDy</span>
              </div>
              <p className="text-slate-400 text-sm">
                Sparse identification of nonlinear dynamical systems from data.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Documentation</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Installation</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Quick Start</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">API Reference</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Examples</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Community</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Discussions</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Contributing</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Code of Conduct</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Research Papers</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Video Tutorials</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Case Studies</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Changelog</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex items-center justify-between">
            <p className="text-slate-400 text-sm">
              © 2024 pySINDy Contributors. Licensed under MIT License.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PySINDyDocs;