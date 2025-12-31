
import React from 'react';
import { COLORS } from '../constants';
import { ProjectType } from '../types';

const projects: ProjectType[] = [
  { id: 1, title: "Lumina Scent", category: "E-Commerce", placeholder: "Project Preview 1" },
  { id: 2, title: "Apex Dynamics", category: "SaaS Platform", placeholder: "Project Preview 2" },
  { id: 3, title: "Foundry Law", category: "Corporate", placeholder: "Project Preview 3" },
  { id: 4, title: "Velo Bikes", category: "Brand Experience", placeholder: "Project Preview 4" },
];

const Portfolio: React.FC = () => {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 
              className="text-4xl md:text-5xl font-black"
              style={{ color: COLORS.NAVY }}
            >
              Our Portfolio
            </h2>
            <p className="text-lg opacity-70 font-medium max-w-xl" style={{ color: COLORS.NAVY }}>
              Explore how we've helped businesses transform their digital presence with clean, minimalist excellence.
            </p>
          </div>
          <button 
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-all hover:gap-4 group"
            style={{ color: COLORS.NAVY }}
          >
            See all work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              <div 
                className="aspect-[4/5] rounded-3xl mb-6 relative overflow-hidden transition-all group-hover:shadow-2xl border-2 border-slate-50"
                style={{ backgroundColor: COLORS.GRAY_LIGHT }}
              >
                {/* 2D Design representation */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center opacity-40 transition-opacity group-hover:opacity-100">
                   <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: COLORS.AQUA }}>
                     SALT Creative
                   </div>
                   <div className="font-bold text-slate-400">
                     {project.placeholder}
                   </div>
                   <div className="mt-4 flex gap-2">
                     <div className="w-8 h-8 rounded-full bg-white shadow-sm" />
                     <div className="w-8 h-8 rounded-full bg-white shadow-sm" />
                   </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="px-2">
                <div className="text-sm font-bold uppercase tracking-[0.2em] mb-1" style={{ color: COLORS.AQUA }}>
                  {project.category}
                </div>
                <h4 className="text-xl font-bold" style={{ color: COLORS.NAVY }}>
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
