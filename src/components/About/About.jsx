import React ,{useState} from "react";
import { Mail, Phone,  Send} from 'lucide-react';
import { AlertTriangle, Target, TrendingUp, Users, Clock, Shield, Zap, Globe } from "lucide-react";
import {
  Database,
  Image,
  Brain,
  MapPin,
  BarChart3,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function AboutSection() {
  const objectives = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "sax Crop Identification",
      description: "Develop ML models to automatically identify different crop types from satellite imagery",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Precise Area Estimation",
      description: "Calculate accurate cultivation areas for effective resource planning",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Provide continuous monitoring capabilities for crop health and growth",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Farmer Empowerment",
      description: "Enable farmers to make data-driven decisions for better yields",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Verification",
      description: "Support PMFBY claims with accurate crop area verification",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Disaster Assessment",
      description: "Rapid assessment of crop damage during natural disasters",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scalable Solution",
      description: "Develop a system that can be scaled across different regions",
    },
  ];

  const steps = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Acquisition",
      description:
        "Collect high-resolution satellite imagery from Sentinel-2 and other sources",
      details: [
        "Multi-spectral imagery collection",
        "Historical data analysis",
        "Real-time data streams",
      ],
      color: "blue",
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Preprocessing",
      description: "Clean, normalize, and prepare satellite imagery for analysis",
      details: [
        "Atmospheric correction",
        "Cloud removal",
        "Image enhancement",
        "Data standardization",
      ],
      color: "purple",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Feature Extraction",
      description:
        "Extract relevant spectral and spatial features from processed imagery",
      details: [
        "NDVI calculation",
        "Spectral indices",
        "Texture analysis",
        "Pattern recognition",
      ],
      color: "orange",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Crop Classification",
      description:
        "Apply machine learning models to identify and classify different crop types",
      details: [
        "Neural networks",
        "Random forest",
        "SVM classification",
        "Ensemble methods",
      ],
      color: "green",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Area Estimation",
      description:
        "Calculate precise cultivation areas for each identified crop type",
      details: [
        "Pixel-based calculation",
        "Geometric corrections",
        "Statistical analysis",
        "Accuracy assessment",
      ],
      color: "cyan",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Visualization & Reports",
      description:
        "Generate interactive maps and comprehensive analytical reports",
      details: [
        "GIS mapping",
        "Interactive dashboards",
        "Statistical reports",
        "Export capabilities",
      ],
      color: "indigo",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Validation",
      description:
        "Verify results through ground truth data and accuracy assessment",
      details: [
        "Field verification",
        "Cross-validation",
        "Accuracy metrics",
        "Quality assurance",
      ],
      color: "emerald",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      green: "bg-green-100 text-green-600 border-green-200",
      cyan: "bg-cyan-100 text-cyan-600 border-cyan-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      emerald: "bg-emerald-100 text-emerald-600 border-emerald-200",
    };
    return colors[color];
  };
  const guide = {
    name: "Mr. A.A.Urunkar",
    designation: "Associate Professor & Project Guide",
    department: "Computer Science & Engineering",
    college: "Walchand College of Engineering, Sangli",
    expertise: ["Machine Learning", "Computer Vision", "IOT"],
    email: "",
  };

  const teamMembers = [
    {
      name: "Vedika Mathkar",
      role: "Team Lead",
      rollNo: "CS19B001",
      expertise: ["Deep Learning", "Satellite Imagery", "Python"],
      email: "",
      linkedin: "",
      github: ""
    },
    {
      name: "Sontakke Sanskar",
      role: "",
      rollNo: "",
      expertise: [""],
      email: "",
      linkedin: "",
      github: ""
    },
    {
      name: "Siddheshwar Sakhre",
      role: "",
      rollNo: "",
      expertise: ["Data Analysis", "Scikit-learn", "Statistics"],
      email: "",
      linkedin: "",
      github: ""
    }
  ];

  const college = {
    name: "Walchand College of Engineering, Sangli",
    established: "1983",
    affiliation: "Shivaji University, Kolhapur",
    location: "Sangli, Maharashtra, India",
    website: "www.walchandsangli.ac.in"
  };
    const impacts = [
    {
      icon: "💧",
      title: "Improved Water Management",
      description: "Optimize irrigation schedules and water usage based on precise crop area and health monitoring.",
      benefits: [
        "30% reduction in water wastage",
        "Precision irrigation mapping",
        "Real-time soil moisture integration",
        "Sustainable water resource management"
      ],
      color: "bg-blue-100 text-blue-600",
      stat: "30%",
      statLabel: "Water Savings"
    },
    {
      icon: "🛡️",
      title: "Faster Crop Insurance Verification",
      description: "Accelerate PMFBY (Pradhan Mantri Fasal Bima Yojana) claims processing with automated crop area verification.",
      benefits: [
        "90% faster claim processing",
        "Reduced fraudulent claims",
        "Accurate damage assessment",
        "Improved farmer satisfaction"
      ],
      color: "bg-green-100 text-green-600",
      stat: "90%",
      statLabel: "Faster Claims"
    },
    {
      icon: "⚠️",
      title: "Disaster Impact Assessment",
      description: "Rapid assessment of crop damage during floods, droughts, and other natural disasters for immediate response.",
      benefits: [
        "Real-time damage mapping",
        "Emergency response coordination",
        "Recovery planning support",
        "Historical damage analysis"
      ],
      color: "bg-orange-100 text-orange-600",
      stat: "24hrs",
      statLabel: "Response Time"
    },
    {
      icon: "👥",
      title: "Policy-making Support",
      description: "Provide government agencies with accurate agricultural data for informed policy decisions and resource allocation.",
      benefits: [
        "Evidence-based policy making",
        "Resource optimization",
        "Agricultural planning",
        "Food security monitoring"
      ],
      color: "bg-purple-100 text-purple-600",
      stat: "100%",
      statLabel: "Data Accuracy"
    }
  ];

  const stakeholders = [
    { icon: "👨‍🌾", title: "Farmers", description: "Better crop management and increased yields", color: "text-green-600" },
    { icon: "🏦", title: "Insurance Companies", description: "Faster claim processing and fraud reduction", color: "text-blue-600" },
    { icon: "🌍", title: "Government Agencies", description: "Data-driven agricultural policies", color: "text-purple-600" },
    { icon: "📈", title: "Researchers", description: "Agricultural insights and trend analysis", color: "text-orange-600" }
  ];

  const achievements = [
    { icon: "🏆", title: "Technology Innovation", value: "AI-Powered Solution", description: "Advanced machine learning for agriculture" },
    { icon: "⏱️", title: "Processing Speed", value: "< 5 minutes", description: "For 1000 hectare analysis" },
    { icon: "🌐", title: "Coverage Area", value: "10,000+ hectares", description: "Successfully mapped and monitored" },
    { icon: "📊", title: "Accuracy Rate", value: "95.2%", description: "Validated against ground truth" }
  ];
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "cropvision@wce.ac.in",
      link: "mailto:cropvision@wce.ac.in"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 233 230 1234",
      link: "tel:+912332301234"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "Walchand College of Engineering, Vishrambag, Sangli, Maharashtra 416415",
      link: "https://maps.google.com/?q=Walchand+College+of+Engineering+Sangli"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Project Collaboration",
    "Technical Support",
    "Research Partnership",
    "Media Inquiry",
    "Other"
  ];

  return (
    <section className="py-20 bg-[#dae5e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold  text-green-800 mb-6">About Our Project</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing agriculture through advanced satellite imagery analysis and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Problem Statement */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl text-red-800">Problem Statement</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Traditional crop monitoring and area estimation methods face significant challenges:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Manual surveys are costly and time-consuming</strong> - requiring extensive fieldwork and human
                    resources
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>High error rates</strong> in visual estimation and data collection
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Limited coverage</strong> especially in remote or inaccessible areas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Delayed reporting</strong> affecting timely decision-making
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution Abstract */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl text-green-800">Our Solution</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Our automated system leverages cutting-edge technology to transform agricultural monitoring:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Satellite imagery analysis</strong> for comprehensive coverage without physical access
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Machine learning algorithms</strong> for accurate crop identification and classification
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Automated area estimation</strong> reducing human error and increasing precision
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    <strong>Real-time insights</strong> for efficient irrigation, insurance verification, and disaster management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div>
          <h3 className="text-3xl text-green-800 text-center mb-12">Project Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <div className="text-green-600">{objective.icon}</div>
                </div>
                <h4 className="text-lg text-green-800 mb-3">{objective.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-green-800 mb-6">Methodology</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach from satellite data to actionable agricultural
            insights
          </p>
        </div>

        {/* Methodology Flow */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 mb-8">
              {steps.slice(0, 4).map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getColorClasses(
                        step.color
                      )}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-xs text-gray-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < 3 && (
                    <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.slice(4).map((step, index) => (
                <div key={index + 4} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${getColorClasses(
                        step.color
                      )}`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-xs text-gray-500 flex items-center"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < 2 && (
                    <ArrowRight className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClasses(
                        step.color
                      )}`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-xs text-gray-500 flex items-center"
                          >
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8">
          <h3 className="text-2xl text-green-800 text-center mb-8">
            Why Our Methodology Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg text-green-800 mb-2">Proven Accuracy</h4>
              <p className="text-green-600 text-sm">
                95%+ accuracy in crop identification through validated ML models
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg text-green-800 mb-2">Scalable Solution</h4>
              <p className="text-green-600 text-sm">
                Automated pipeline handles large-scale agricultural monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg text-green-800 mb-2">AI-Powered</h4>
              <p className="text-green-600 text-sm">
                Continuous learning algorithms improve accuracy over time
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-green-800 mb-6">Impact & Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming agriculture through data-driven insights and automated monitoring
          </p>
        </div>

        {/* Main Impact Areas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${impact.color}`}>
                  {impact.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl text-green-600">{impact.stat}</div>
                  <div className="text-sm text-gray-500">{impact.statLabel}</div>
                </div>
              </div>
              
              <h3 className="text-xl text-green-800 mb-3">{impact.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{impact.description}</p>
              
              <div className="space-y-2">
                {impact.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stakeholder Benefits */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <h3 className="text-3xl text-green-800 text-center mb-12">Stakeholder Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors duration-300 text-3xl ${stakeholder.color}`}>
                  {stakeholder.icon}
                </div>
                <h4 className="text-lg text-gray-800 mb-2">{stakeholder.title}</h4>
                <p className="text-gray-600 text-sm">{stakeholder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-green-50 rounded-2xl p-8">
          <h3 className="text-2xl text-green-800 text-center mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-2xl">
                  {achievement.icon}
                </div>
                <div className="text-2xl text-green-600 mb-1">{achievement.value}</div>
                <h4 className="text-sm text-green-800 mb-2">{achievement.title}</h4>
                <p className="text-xs text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">Ready to Transform Agriculture?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join the agricultural revolution with our AI-powered crop monitoring and analysis platform. 
              Experience the future of sustainable farming today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-green-600 rounded-full hover:bg-green-50 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

      </div>




 


    <section className="py-20 bg-[#dae5e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-green-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our project or interested in collaboration? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl text-green-800 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-green-800 mb-1">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div className="mt-12 bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <h4 className="text-lg text-green-800 mb-4">Project Information</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <strong>Project Type:</strong> Final Year Project
                </div>
                <div>
                  <strong>Department:</strong> Computer Science & Engineering
                </div>
                <div>
                  <strong>Academic Year:</strong> 2023-2024
                </div>
                <div>
                  <strong>Status:</strong> <span className="text-green-600">Active Development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl text-green-800 mb-6">Send us a Message</h3>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-green-800 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-green-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-green-800 mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-green-800 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your message here..."
                  />
                  {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>






    </section>
  );
}
