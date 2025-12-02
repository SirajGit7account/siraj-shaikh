import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/github')({
})

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN || import.meta.env.GITHUB_TOKEN

export interface ContributionDay {
  contributionCount: number
  date: string
}

export interface Week {
  contributionDays: ContributionDay[]
}

export interface ContributionCalendar {
  totalContributions: number
  weeks: Week[]
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar
}

export interface User {
  contributionsCollection: ContributionsCollection
}

export interface GitHubApiResponse {
  data: {
    user: User
  }
}

const query = /* GraphQL */ `
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

export async function retrieveContributionData(userName: string): Promise<GitHubApiResponse> {
  if (!TOKEN) {
    throw new Error('GitHub token is not configured')
  }

  const variables = {
    userName
  }
  const body = {
    query,
    variables
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`GitHub API error: ${res.status} ${errorText}`)
  }

  const data = await res.json()
  
  if (data.errors) {
    throw new Error(`GraphQL error: ${data.errors.map((e: any) => e.message).join(', ')}`)
  }

  return data
}
