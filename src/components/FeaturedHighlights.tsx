import { FeaturedHighlightsTile } from "./FeaturedHighlightsTile";
const featuredHighlights = [
    {
      icon: 'brick',
      title: "Hands-On Learning Experience",
      description: "We believe in learning by doing. Our courses provide extensive hands-on training with practical projects, ensuring you gain real skills and experience. Work directly with the tools and materials used in the industry to master bricklaying and plastering techniques."
    },
    {
      icon: 'pencil',
      title: "Experienced Instructors",
      description: "Learn from skilled professionals. Our instructors have years of experience in bricklaying and plastering, bringing valuable knowledge, insights, and tips to help you excel in your learning journey."
    },
    {
      icon: 'building',
      title: "Practical Training Environment",
      description: "Train in a realistic setting equipped to provide a hands-on experience. Our facilities are designed to offer you the practice you need to prepare for work on actual construction sites."
    },
    {
      icon: 'blocks',
      title: "Small Class Sizes",
      description: "Benefit from personalized attention with our small class sizes. This ensures that you receive the guidance and support you need to develop your skills effectively and confidently."
    },
    {
      icon: 'graduation',
      title: "Community-Focused Learning",
      description: "Join a supportive community of learners. Our school fosters a friendly environment where you can collaborate with peers, share experiences, and grow together as you develop your skills."
    },
    {
      icon: 'job',
      title: "Real-World Application",
      description: "Learn skills that are directly applicable to real-life situations. Whether you're preparing for a career in construction or tackling DIY projects, our training ensures you're ready to apply what you've learned."
    }
  ];
  


const FeaturedHighlights = () => {
  return (
    <section className=' relative w-[100%] min-h-[500px] flex justify-center bg-[#161616]'>
        <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
          {featuredHighlights.map((hl, idx) => (
            <FeaturedHighlightsTile key={hl.title} idx={idx} icon={hl.icon} title={hl.title} description={hl.description} />
          ))}
        </div>
    </section>
  )
}

export default FeaturedHighlights