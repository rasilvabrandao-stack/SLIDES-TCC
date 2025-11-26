import React from 'react';
import { SlideContent, SlideType } from '../types';
import { Quiz } from './Quiz';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Props {
  data: SlideContent;
}

export const SlideRenderer: React.FC<Props> = ({ data }) => {
  const Icon = data.icon;

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // TCC Header for non-cover slides
  const Header = () => (
    <motion.div variants={itemVariants} className="w-full border-b border-cyan-500/20 mb-6 pb-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="text-cyan-400" size={28} />}
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase truncate max-w-[70vw]">{data.title}</h2>
      </div>
      <div className="text-xs font-mono text-cyan-500/50 uppercase tracking-widest hidden md:block">
        TCC • Desenv. Sistemas
      </div>
    </motion.div>
  );

  const ImageDisplay = () => (
    <motion.div 
      variants={itemVariants}
      className="w-full h-48 md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl relative group mt-6 md:mt-0"
    >
      <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
      <img 
        src={data.image} 
        alt={data.title} 
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 z-20" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 z-20" />
    </motion.div>
  );

  switch (data.type) {
    case SlideType.COVER:
      return (
        <motion.div 
          className="flex flex-col h-full items-center justify-center text-center px-6 relative overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Background Image for Cover */}
          {data.image && (
            <div className="absolute inset-0 z-0 opacity-20 fixed">
              <img src={data.image} className="w-full h-full object-cover" alt="Background" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-[#0B1121]/80 to-[#0B1121]/50" />
            </div>
          )}

          {/* School Info */}
          {data.schoolInfo && (
            <motion.div variants={itemVariants} className="mb-8 space-y-2 z-10 pt-10 md:pt-0">
               <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6 rounded-full" />
               <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-cyan-400 uppercase">
                  {data.schoolInfo.name}
               </h3>
               <p className="text-slate-400 font-light text-sm uppercase tracking-widest">
                  {data.schoolInfo.course}
               </p>
            </motion.div>
          )}

          {/* Title */}
          <motion.div variants={itemVariants} className="max-w-5xl mb-12 relative z-10">
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-2xl uppercase">
               {data.title}
             </h1>
             {data.subtitle && (
                <p className="text-lg md:text-2xl text-slate-300 font-light border-t border-white/10 pt-6 inline-block px-12 backdrop-blur-sm bg-black/20 rounded-xl uppercase">
                  {data.subtitle}
                </p>
             )}
          </motion.div>

          {/* Authors */}
          {data.authors && (
            <motion.div variants={itemVariants} className="mb-10 z-10 w-full max-w-4xl">
              <p className="uppercase tracking-widest font-bold text-cyan-600/70 text-xs mb-4">Autores</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {data.authors.map((author, i) => (
                  <span key={i} className="text-slate-200 font-semibold text-sm md:text-base border-b border-transparent hover:border-cyan-500 transition-colors uppercase">
                    {author}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Advisor and Location */}
          <motion.div variants={itemVariants} className="z-10 space-y-4 pb-10">
            {data.advisor && (
              <div className="text-slate-300">
                <span className="text-cyan-600/70 uppercase text-xs font-bold tracking-widest block mb-1">Orientador</span>
                <span className="text-lg font-medium">{data.advisor}</span>
              </div>
            )}
            
            {data.location && (
              <div className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-8">
                {data.location} • {data.schoolInfo?.year}
              </div>
            )}
          </motion.div>
        </motion.div>
      );

    case SlideType.QUIZ:
      return (
        <motion.div 
          className="flex flex-col h-full pt-16 md:pt-24 px-6 md:px-16 max-w-7xl mx-auto w-full overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className={`grid ${data.link ? 'grid-cols-1 md:grid-cols-2 gap-12' : 'grid-cols-1'} h-full items-center pb-12`}>
             <div className="flex flex-col justify-start h-full w-full">
                <Header />
                <motion.div variants={itemVariants} className="flex-1 flex flex-col justify-center">
                   <p className="text-slate-300 mb-8 text-base md:text-lg font-light leading-relaxed whitespace-pre-wrap">
                      {data.content || data.subtitle}
                   </p>
                   
                   {data.link ? (
                     <div className="flex flex-col items-start gap-6">
                        <a 
                          href={data.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-900/50 text-lg"
                        >
                          {data.linkText || "Acessar Link"}
                          <ExternalLink size={24} />
                        </a>
                        <p className="text-sm text-slate-500 max-w-md bg-slate-900/50 p-4 rounded border border-slate-700">
                          <strong>Tecnologias:</strong> HTML, CSS, JavaScript.<br/>
                          Este quiz avalia o nível de dependência tecnológica e foi desenvolvido pelos alunos.
                        </p>
                     </div>
                   ) : (
                     <Quiz />
                   )}
                </motion.div>
             </div>
             
             {/* If it's an external link quiz, show an image if available */}
             {data.link && data.image && (
                <div className="flex flex-col justify-center">
                  <ImageDisplay />
                </div>
             )}
          </div>
        </motion.div>
      );

    case SlideType.LIST:
      return (
        <motion.div 
          className="flex flex-col h-full pt-16 md:pt-24 px-6 md:px-16 max-w-7xl mx-auto w-full overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className={`grid ${data.image ? 'grid-cols-1 md:grid-cols-2 gap-8 md:gap-12' : 'grid-cols-1'}`}>
            <div className="flex flex-col h-full">
              <Header />
              
              <div className="flex-1 flex flex-col justify-start">
                {data.subtitle && (
                  <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 mb-6 font-light border-l-2 border-cyan-500 pl-4">
                    {data.subtitle}
                  </motion.p>
                )}

                {/* Optional Intro Text for Lists */}
                {data.content && (
                  <motion.p variants={itemVariants} className="text-slate-400 mb-6 text-sm md:text-base leading-relaxed">
                    {data.content}
                  </motion.p>
                )}
                
                <div className="grid grid-cols-1 gap-3 pb-8">
                  {data.bullets?.map((bullet, idx) => (
                    <motion.div 
                        key={idx}
                        variants={itemVariants}
                        className="group bg-slate-800/40 hover:bg-slate-800/80 transition-all duration-300 p-4 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 flex items-start gap-4 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="flex-shrink-0 w-6 h-6 mt-1 rounded bg-slate-700 group-hover:bg-cyan-600 transition-colors flex items-center justify-center text-white font-mono font-bold text-xs shadow-lg">
                        {idx + 1}
                      </span>
                      <p className="text-sm md:text-base text-slate-200 leading-relaxed group-hover:text-white transition-colors relative z-10">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            {data.image && (
              <div className="flex flex-col justify-center pb-8 md:pb-0 h-full">
                <ImageDisplay />
              </div>
            )}
          </div>
        </motion.div>
      );

    case SlideType.CONCLUSION:
      return (
        <motion.div 
          className="flex flex-col h-full pt-16 md:pt-24 px-6 md:px-16 max-w-7xl mx-auto w-full overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
           <div className={`grid ${data.image ? 'grid-cols-1 md:grid-cols-2 gap-12' : 'grid-cols-1'} h-full items-center pb-20`}>
             <div className="flex flex-col justify-center h-full">
               
               <motion.div variants={itemVariants} className="mb-6">
                  {Icon && <Icon className="text-cyan-400 mb-4" size={48} />}
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase">
                    {data.title}
                  </h2>
               </motion.div>

               <motion.div variants={itemVariants} className="relative z-10 max-w-2xl bg-slate-800/20 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                   <div className="absolute -left-2 -top-4 text-6xl text-cyan-700 opacity-50 font-serif">"</div>
                   <p className="text-base md:text-lg text-slate-200 font-light leading-relaxed whitespace-pre-wrap">
                     {data.content}
                   </p>
                   <div className="absolute -right-2 -bottom-8 text-6xl text-cyan-700 opacity-50 font-serif">"</div>
               </motion.div>
               
             </div>

             {/* Image Display */}
             {data.image && (
               <div className="flex flex-col justify-center">
                  <ImageDisplay />
               </div>
             )}
           </div>
        </motion.div>
      );

    default: // SECTION
      return (
        <motion.div 
          className="flex flex-col h-full pt-16 md:pt-24 px-6 md:px-16 max-w-7xl mx-auto w-full overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
           <div className={`grid ${data.image ? 'grid-cols-1 md:grid-cols-2 gap-8 md:gap-12' : 'grid-cols-1'} h-full items-start md:items-center pb-20`}>
              <div className="flex flex-col justify-start h-full">
                <Header />
                <motion.div variants={itemVariants} className="flex-1 flex flex-col justify-center">
                  <div className={`bg-slate-800/30 p-6 md:p-8 rounded-xl border border-slate-700/50 backdrop-blur-sm relative overflow-hidden ${!data.image ? 'max-w-4xl mx-auto w-full' : ''}`}>
                    {/* Tech decoration */}
                    {!data.image && (
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                        {Icon && <Icon size={120} />}
                       </div>
                    )}
                    
                    <p className={`text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed font-light relative z-10 whitespace-pre-wrap ${!data.image ? 'text-justify' : ''}`}>
                      {data.content}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Side Image */}
              {data.image && (
                 <div className="flex flex-col justify-center">
                   <ImageDisplay />
                 </div>
              )}
           </div>
        </motion.div>
      );
  }
};