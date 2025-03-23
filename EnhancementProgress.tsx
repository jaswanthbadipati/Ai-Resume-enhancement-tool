import React from 'react';
import { ResumeAnalysis } from '../lib/resumeEnhancements';

interface Props {
  analysis: ResumeAnalysis | null;
  isProcessing: boolean;
}

export const EnhancementProgress: React.FC<Props> = ({ analysis, isProcessing }) => {
  if (!analysis && !isProcessing) return null;

  return (
    <div className="mt-6 bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">Enhancement Progress</h3>
      
      {isProcessing ? (
        <div className="space-y-4">
          <div className="h-2 bg-gray-200 rounded">
            <div className="h-2 bg-blue-500 rounded animate-pulse" style={{ width: '60%' }} />
          </div>
          <p className="text-sm text-gray-600">Analyzing and enhancing your resume...</p>
        </div>
      ) : analysis ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Match Score</span>
            <span className="text-sm text-blue-600">{analysis.score}%</span>
          </div>
          
          <div className="h-2 bg-gray-200 rounded">
            <div 
              className="h-2 bg-blue-500 rounded transition-all duration-500" 
              style={{ width: `${analysis.score}%` }} 
            />
          </div>

          {analysis.missingKeywords.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Suggested Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.missingKeywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {analysis.improvements.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Suggested Improvements</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {analysis.improvements.map((improvement, index) => (
                  <li key={index}>{improvement}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};