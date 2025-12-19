// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Sprout,
//   TestTube,
//   Calendar,
//   Video,
//   MessageSquare,
//   Leaf,
//   Droplets,
//   Sun,
//   Thermometer,
//   ChevronRight,
// } from "lucide-react";



// // ✅ Button Component
// const Button = ({
//   children,
//   className = "",
//   onClick,
//   variant = "default",
//   size = "md",
// }) => {
//   const base =
//     "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none";
//   const sizes = {
//     sm: "px-3 py-1.5 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   };
//   const variants = {
//     default:
//       "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg",
//     outline:
//       "border border-white/30 text-white bg-transparent hover:bg-white/10",
//   };

//   return (
//     <button
//       onClick={onClick}
//       className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// // ✅ Card Component
// const Card = ({ children, className = "", onClick }) => (
//   <div
//     onClick={onClick}
//     className={`rounded-2xl bg-white shadow-md hover:shadow-lg transition-all overflow-hidden ${className}`}
//   >
//     {children}
//   </div>
// );

// // ✅ CardContent Component
// const CardContent = ({ children, className = "" }) => (
//   <div className={`p-4 ${className}`}>{children}</div>
// );

// // ✅ Badge Component
// const Badge = ({ children, className = "" }) => (
//   <span
//     className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${className}`}
//   >
//     {children}
//   </span>
// );

// // ✅ ImageWithFallback Component
// const ImageWithFallback = ({ src, alt, className = "" }) => {
//   const [error, setError] = React.useState(false);
//   return (
//     <img
//       src={
//         !error
//           ? src
//           : "https://via.placeholder.com/400x300?text=Image+Not+Available"
//       }
//       alt={alt}
//       className={className}
//       onError={() => setError(true)}
// E H  JUBU    />
//   );
// };



// const cropCards = [
//   {
//     id: "rice",
//     name: "Rice (Paddy)",
//     season: "Kharif",
//     image:
//       "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
//     icon: <Droplets className="w-4 h-4" />,
//   },
//   {
//     id: "wheat",
//     name: "Wheat",
//     season: "Rabi",
//     image:
//       "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
//     icon: <Sun className="w-4 h-4" />,
//   },
//   {
//     id: "maize",
//     name: "Maize (Corn)",
//     season: "Kharif",
//     image:
//       "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
//     icon: <Sun className="w-4 h-4" />,
//   },
//   {
//     id: "sugarcane",
//     name: "Sugarcane",
//     season: "Perennial",
//     image:
//       "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop",
//     icon: <Droplets className="w-4 h-4" />,
//   },
//   {
//     id: "tomato",
//     name: "Tomato",
//     season: "All Season",
//     image:
//       "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=300&fit=crop",
//     icon: <Thermometer className="w-4 h-4" />,
//   },
//   {
//     id: "cotton",
//     name: "Cotton",
//     season: "Kharif",
//     image:
//       "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
//     icon: <Sun className="w-4 h-4" />,
//   },
// ];

// const quickLinks = [

//   {
//     id: "/crop-recommendation",
//     title: "Crop Recommendation",
//     description: "Get AI-powered crop suggestions",
//     icon: <Sprout className="w-6 h-6" />,
//     color: "bg-green-500",
//   },

//   {
//     id: "/chatbot",
//     title: "Virtual Adviser",
//     description: "Get instant farming advice",
//     icon: <MessageSquare className="w-6 h-6" />,
//     color: "bg-orange-500",
//   },
// ];

// const Landing = ({ onNavigate = () => {} }) => {
//   const navigate=useNavigate();

//   return (
//     <div className="min-h-screen bg-background font-sans text-gray-900">
//       {/* HERO SECTION */}
//       <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <ImageWithFallback
//             src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop"
//             alt="Farm background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
//         </div>

//         <div className="relative z-10 text-center max-w-4xl p-8">
//           <div className="flex items-center justify-center mb-6">
//             <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
//               <Leaf className="w-8 h-8 text-white" />
//             </div>
//           </div>

//           <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//             Smart Farming with
//             <span className="text-yellow-400 block lg:inline lg:ml-4">
//               AI Intelligence
//             </span>
//           </h1>

//           <p className="text-lg text-white/90 mb-8 leading-relaxed">
//             Revolutionize your agriculture with AI-powered crop
//             recommendations, soil analysis, and intelligent farming.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               onClick={() => navigate("/register")}
//               className="bg-green-600 hover:bg-green-700 text-white"
//             >
//               Get Started <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={() => navigate("/about")}
//             >
//               Explore Features
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* CROPS SECTION */}
//       <section className="py-16 bg-neutral-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">
//             Explore Crop Intelligence
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {cropCards.map((crop) => (
//               <Card
//                 key={crop.id}
//                 className="cursor-pointer"
//                 onClick={() => onNavigate("plant-explorer", { crop: crop.id })}
//               >
//                 <div className="relative h-48">
//                   <ImageWithFallback
//                     src={crop.image}
//                     alt={crop.name}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                   <Badge className="absolute top-3 right-3 bg-white/20 text-white border-0">
//                     {crop.icon}
//                     <span className="ml-1">{crop.season}</span>
//                   </Badge>
//                 </div>
//                 <CardContent>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="font-semibold">{crop.name}</h3>
//                       <p className="text-sm text-gray-500">
//                         Season: {crop.season}
//                       </p>
//                     </div>
//                     <ChevronRight className="w-5 h-5 text-gray-400" />
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* QUICK LINKS SECTION */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-8">Quick Access Tools</h2>
//           <div className="grid grid-cols-2  gap-6">
//             {quickLinks.map((link) => (
//               <Card
//                 key={link.id}
//                 className="cursor-pointer"
//                 onClick={() => navigate(link.id)}
//               >
//                 <CardContent className="p-6 text-center">
//                   <div
//                     className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}
//                   >
//                     {link.icon}
//                   </div>
//                   <h3 className="font-semibold mb-1">{link.title}</h3>
//                   <p className="text-sm text-gray-500">{link.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//             <button
//         className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-[100px] h-[100px] md:w-[120px] md:h-[120px]
//                    bg-cover bg-center rounded-full shadow-2xl border-2 border-white
//                    transition-transform duration-300 hover:scale-110 z-50"
//         style={{ backgroundImage: "url('/chatbot.jpg')" }}
//         onClick={()=>navigate("/chatbot")}
//       >
//       </button>
     
//     </div>
//   );
// };

// export default Landing;
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sprout,
  MessageSquare,
  Leaf,
  Droplets,
  Sun,
  Thermometer,
  ChevronRight,
} from "lucide-react";

/* ------------------ UI COMPONENTS ------------------ */

const Button = ({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "md",
}) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    default:
      "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg",
    outline:
      "border border-white/40 text-white bg-transparent hover:bg-white/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "", onClick }) => (
  <div
    onClick={onClick}
    className={`rounded-2xl bg-white shadow-md hover:shadow-lg transition-all overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${className}`}
  >
    {children}
  </span>
);

const ImageWithFallback = ({ src, alt, className = "" }) => {
  const [error, setError] = React.useState(false);
  return (
    <img
      src={
        !error
          ? src
          : "https://via.placeholder.com/400x300?text=Image+Not+Available"
      }
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

/* ------------------ DATA ------------------ */

const cropCards = [
  {
    id: "rice",
    name: "Rice (Paddy)",
    season: "Kharif",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    icon: <Droplets className="w-4 h-4" />,
  },
  {
    id: "wheat",
    name: "Wheat",
    season: "Rabi",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    icon: <Sun className="w-4 h-4" />,
  },
  {
    id: "maize",
    name: "Maize (Corn)",
    season: "Kharif",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
    icon: <Sun className="w-4 h-4" />,
  },
  {
    id: "tomato",
    name: "Tomato",
    season: "All Season",
    image:
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400&h=300&fit=crop",
    icon: <Thermometer className="w-4 h-4" />,
  },
];

const quickLinks = [
  {
    id: "/crop-recommendation",
    title: "Crop Recommendation",
    description: "Get AI-powered crop suggestions",
    icon: <Sprout className="w-6 h-6" />,
    color: "bg-green-500",
  },
  {
    id: "/chatbot",
    title: "Virtual Adviser",
    description: "Get instant farming advice",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-orange-500",
  },
];

/* ------------------ HOME PAGE ------------------ */

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop"
            alt="Farm background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Smart Farming with
            <span className="text-yellow-400 block lg:inline lg:ml-4">
              AI Intelligence
            </span>
          </h1>

          <p className="text-lg text-white/90 mb-8">
            AI-powered crop recommendations, soil analysis, and intelligent
            farming support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/crop-recommendation")}>
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
  size="lg"
  variant="outline"
  onClick={() =>
    document
      .getElementById("quick-tools")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  Explore Features
</Button>
          </div>
        </div>
      </section>

      {/* CROPS SECTION */}
      <section className="py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Crop Intelligence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cropCards.map((crop) => (
              <Card
                key={crop.id}
                className="cursor-pointer"
                onClick={() => navigate(`/plant-explorer/${crop.id}`)}
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-white/20 text-white">
                    {crop.icon}
                    <span className="ml-1">{crop.season}</span>
                  </Badge>
                </div>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{crop.name}</h3>
                      <p className="text-sm text-gray-500">
                        Season: {crop.season}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section id="quick-tools" className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Quick Access Tools</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickLinks.map((link) => (
              <Card
                key={link.id}
                className="cursor-pointer"
                onClick={() => navigate(link.id)}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {link.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{link.title}</h3>
                  <p className="text-sm text-gray-500">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FLOATING CHAT BUTTON */}
      <button
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10
        w-[90px] h-[90px] md:w-[110px] md:h-[110px]
        bg-cover bg-center rounded-full shadow-2xl border-2 border-white
        transition-transform duration-300 hover:scale-110 z-50"
        style={{ backgroundImage: "url('/chatbot.jpg')" }}
        onClick={() => navigate("/chatbot")}
      />
    </div>
  );
};

export default Home;
