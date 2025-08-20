import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Providers } from './Providers';
import { HomePage } from '@/pages/HomePage';
import { EffectsLabPage } from '@/pages/EffectsLabPage';
import { LeaderboardPage } from '@/pages/LeaderboardPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SettingsPage } from '@/pages/SettingsPage';
import { TermsPage } from '@/pages/TermsPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TutorialPage } from '@/pages/TutorialPage';

export function App() {
  return (
    <Providers>
      <Router>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navigation />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/effects-lab" element={<EffectsLabPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/tutorial" element={<TutorialPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Providers>
  );
}
