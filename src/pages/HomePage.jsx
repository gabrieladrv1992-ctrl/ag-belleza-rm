import Hero from '@/components/home/Hero'
import ValueProposition from '@/components/home/ValueProposition'
import NewsSummary from '@/components/home/NewsSummary'
import ReviewNotice from '@/components/common/ReviewNotice'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReviewNotice />
      <ValueProposition />
      <NewsSummary />
    </>
  )
}
