'use client'
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import SectionHeading from '@/app/components/SectionHeader';

const Client = () => {
    const proj = "Focus on creating policy briefs for all of the above projects as well as other salient ideas. This team will meet with all of the other project committees to distill findings from our reports, interviews with key opinion leaders, and general information sessions into tangible briefs that can be disseminated to policymakers at both a local and national scale."
    return (
        <div>
        <SectionHeading title="Crafting Healthcare Legislation" />
        <div>
            <div className="
                 mt-10
                 mx-20
                 grid grid-row-2 
                 gap-4
                 justify-items-center">
                        
                  <div className=" text-4xl">
                  <div className=" text-4xl underline font-bold text-center">
                Initiative Projects
            </div>
                <div className="mt-10">
                    {proj}
                    </div>
                  </div>
                </div>
                </div>
        </div>
    );
};

export default Client;










