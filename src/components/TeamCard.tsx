import React from 'react';
import type { Team } from '../data/teams';
import { TeamImage } from './TeamImage';
import { TeamSocialLinks } from './TeamSocialLinks';
import { CategoryBadge } from './CategoryBadge';

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <TeamImage
          src={team.imageUrl}
          alt={team.name}
          className="w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{team.name}</h3>
            <CategoryBadge category={team.category} />
          </div>
          <TeamSocialLinks website={team.website} twitter={team.twitter} />
        </div>
        <p className="text-gray-600 mb-4">{team.description}</p>
        <div className="text-sm text-gray-500">
          📍 {team.location}
        </div>
      </div>
    </div>
  );
}