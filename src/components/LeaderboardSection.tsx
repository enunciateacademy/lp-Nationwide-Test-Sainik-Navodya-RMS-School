import React, { useState } from 'react';
import {
  Trophy,
  Medal,
  Award,
  Globe,
  MapPin,
  TrendingUp,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MOCK_LEADERBOARD } from '../data/mockData';

interface LeaderboardSectionProps {
  onOpenPartnerModal: () => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({ onOpenPartnerModal }) => {
  const [selectedState, setSelectedState] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEntries = MOCK_LEADERBOARD.filter((item) => {
    const matchesState = selectedState === 'All' || item.state === selectedState;
    const matchesQuery =
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.centreName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesQuery;
  });

  return (
    <section id="rankings" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold text-xs border border-amber-200 uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            National Benchmarking Infrastructure
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Give Your Students a{' '}
            <span className="text-blue-700">Bigger Competition.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Local marks give a false sense of security. With Enunciate Academy, your tuition students benchmark their score against thousands of peers across India.
          </p>
          <div className="mt-3 inline-block bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border border-slate-200">
            &ldquo;Your students don&rsquo;t just know their marks. They know where they stand.&rdquo;
          </div>
        </div>

        {/* 3-Tier Ranking Highlight Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mx-auto text-blue-700 font-bold mb-2">
              #1
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">Centre Rank</h3>
            <p className="text-xs text-slate-500 mt-1">
              Crown top performers inside your own tuition centre classroom every single week.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto text-indigo-700 font-bold mb-2">
              #2
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">State Rank</h3>
            <p className="text-xs text-slate-500 mt-1">
              Compare your district’s batch against peer coaching institutes across your state.
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mx-auto text-amber-700 font-bold mb-2">
              #3
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">All India Rank (AIR)</h3>
            <p className="text-xs text-slate-500 mt-1">
              True national percentile calculation matching exact NTA AISSEE test conditions.
            </p>
          </div>

        </div>

        {/* Live All India Leaderboard Display */}
        <div className="mt-12 max-w-5xl mx-auto bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Leaderboard Header */}
          <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-base sm:text-lg text-white">
                  ALL INDIA TEST – 2027 LEADERBOARD
                </h4>
                <p className="text-xs text-slate-400">
                  Live Consolidated Results • Participating Partner Tuition Points
                </p>
              </div>
            </div>

            {/* Quick Search & Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-48">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search student / centre..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="All">All States</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Bihar">Bihar</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Haryana">Haryana</option>
                <option value="Telangana">Telangana</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/80 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800 font-semibold">
                <tr>
                  <th className="py-3 px-4 sm:px-6">AIR</th>
                  <th className="py-3 px-4 sm:px-6">Student Name</th>
                  <th className="py-3 px-4 sm:px-6">Partner Tuition Centre</th>
                  <th className="py-3 px-4 sm:px-6">State / City</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Score</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Percentile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {filteredEntries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-slate-500">
                      No rankers found matching this search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredEntries.map((entry) => (
                    <tr
                      key={entry.rank}
                      className="hover:bg-slate-800/60 transition-colors"
                    >
                      <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          {entry.rank === 1 && (
                            <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-sm">
                              1
                            </span>
                          )}
                          {entry.rank === 2 && (
                            <span className="w-6 h-6 rounded-full bg-slate-300 text-slate-950 font-black flex items-center justify-center text-xs shadow-sm">
                              2
                            </span>
                          )}
                          {entry.rank === 3 && (
                            <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-black flex items-center justify-center text-xs shadow-sm">
                              3
                            </span>
                          )}
                          {entry.rank > 3 && (
                            <span className="font-bold text-slate-400 pl-1.5">
                              #{entry.rank}
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                        {entry.studentName}
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-blue-300 font-medium whitespace-nowrap">
                        {entry.centreName}
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-slate-400 whitespace-nowrap">
                        {entry.city}, {entry.state}
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-right whitespace-nowrap">
                        <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {entry.percentage}% ({entry.score}/{entry.totalMarks})
                        </span>
                      </td>

                      <td className="py-3.5 px-4 sm:px-6 text-right font-semibold text-slate-200 whitespace-nowrap">
                        {entry.percentile} %ile
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer Message */}
          <div className="bg-slate-950 px-6 py-3.5 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Over 1,200+ partner tuition centres participate across 24+ Indian States & UTs.
            </span>
            <button
              onClick={onOpenPartnerModal}
              className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 cursor-pointer"
            >
              Get Your Centre on the Leaderboard ➔
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
