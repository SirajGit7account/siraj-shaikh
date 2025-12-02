import { retrieveContributionData, type GitHubApiResponse } from '../routes/api/github'
import { useEffect, useState } from 'react'
import LoaderState from './loader-state'

export default function GithubGraph({ className = '' }: { className?: string }) {
  const [data, setData] = useState<GitHubApiResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await retrieveContributionData('Sirajgit7account')
        if (result?.data?.user?.contributionsCollection?.contributionCalendar) {
          setData(result)
        } else {
          setError('Invalid data structure')
        }
      } catch (err) {
        console.error('Failed to fetch GitHub data:', err)
        setError(err instanceof Error ? err.message : 'Failed to load')
      }
    }
    fetchData()
  }, [])

  if (error) {
    return (
      <>
        <div className="absolute top-[12vh] left-[44%] text-white/50 font-mono text-sm z-[100]">
          Github Contributions
        </div>
        <div className={`absolute top-[15vh] left-[21.65%] z-20 text-white text-xs ${className}`}>Error: {error}</div>
      </>
    )
  }

  const allWeeks = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || []
  
  // Filter to last 8 months (approximately 32-35 weeks)
  const eightMonthsAgo = new Date()
  eightMonthsAgo.setMonth(eightMonthsAgo.getMonth() - 10)
  
  const weeks = allWeeks.filter(week => {
    // Check if any day in the week is within the last 8 months
    return week.contributionDays.some(day => {
      const dayDate = new Date(day.date)
      return dayDate >= eightMonthsAgo
    })
  })

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-900'
    if (count <= 2) return 'bg-green-300'
    if (count <= 5) return 'bg-green-500'
    return 'bg-green-700'
  }

  // Show animated percentage loader using LoaderState while loading github graph data
  if (!data) {
    return (
      <>
        <div className="absolute top-[12vh] left-[44%] text-white/50 font-mono text-sm z-[100]">
          Github Contributions
        </div>
        <div className="absolute top-[15vh] left-[21.65%] w-[60vw] h-[60vh] z-20">
          <LoaderState />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="absolute top-[12vh] left-[44%] text-white/50 font-mono text-sm z-[100] whitespace-nowrap">
        Github Contributions&nbsp;{data?.data.user.contributionsCollection.contributionCalendar.totalContributions}
      </div>
      <div className={`absolute top-[15vh] left-[21.65%] z-20 flex gap-1 p-4 ${className}`}>
      {weeks.map((week, weekIdx) => (
        <div key={weekIdx} className="flex flex-col gap-1">
          {week.contributionDays.map((day, dayIdx) => (
            <div
              key={dayIdx}
              className={`w-3 h-3 ${getColor(day.contributionCount)}`}
              title={`${day.date}: ${day.contributionCount} contributions`}
            />
          ))}
        </div>
      ))}
      </div>
    </>
  )
}