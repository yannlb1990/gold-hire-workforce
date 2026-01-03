import { useEffect, useState, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote: "The Gold Hire Company consistently delivers quality carpenters who hit the ground running. Their screening process is thorough and saves us weeks of recruitment time.",
    author: "Michael Chen",
    role: "Director",
    company: "Pacific Constructions",
    location: "Gold Coast",
    rating: 5,
  },
  {
    quote: "We needed 15 labourers for a shutdown project with 48 hours notice. They delivered 18 fully compliant workers. Absolute lifesavers for our tight deadline.",
    author: "Sarah Mitchell",
    role: "Project Manager",
    company: "Coastal Building Group",
    location: "Brisbane",
    rating: 5,
  },
  {
    quote: "Their demolition crews are professional and safety-focused. We've used them on three projects now and never had an incident. Highly recommended.",
    author: "James Patterson",
    role: "Site Supervisor",
    company: "Urban Demolition QLD",
    location: "Logan",
    rating: 5,
  },
  {
    quote: "Finally found a labour hire company that understands commercial construction. Their workers arrive on time, have all tickets sorted, and integrate seamlessly with our teams.",
    author: "Amanda Roberts",
    role: "Operations Manager",
    company: "Riverview Developments",
    location: "Ipswich",
    rating: 5,
  },
  {
    quote: "The landscaping crews from The Gold Hire Company transformed our approach to large-scale projects. Reliable, skilled, and always with the right attitude.",
    author: "David Thompson",
    role: "Property Developer",
    company: "Northern Rivers Property",
    location: "Byron Bay",
    rating: 5,
  },
  {
    quote: "What sets them apart is their communication. Any issues are handled immediately, and replacements are sorted same-day. That's rare in this industry.",
    author: "Rebecca Wilson",
    role: "Site Manager",
    company: "Tweed Coast Builders",
    location: "Tweed Heads",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Auto-scroll every 5 seconds
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 section-dark relative overflow-hidden">
      {/* Floating decorative shapes - hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-10 w-48 h-48 rounded-blob bg-gold/5 blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gold/10 blur-2xl" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-blob bg-roman-coffee/5 blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="badge-gold mb-4 md:mb-6">Client Testimonials</div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-concrete mb-3 md:mb-4">
            Trusted by Builders Across{" "}
            <span className="text-gradient-gold">South-East QLD</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-concrete/70 max-w-2xl mx-auto leading-relaxed">
            Here's what our clients say about working with us.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_90%] sm:flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-0"
                >
                  <div className="card-dark h-full flex flex-col relative p-4 md:p-6 lg:p-8">
                    {/* Quote Icon */}
                    <div className="absolute -top-3 -left-1 md:-top-4 md:-left-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <Quote className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4 pt-3 md:pt-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 fill-gold text-gold"
                        />
                      ))}
                    </div>

                    {/* Quote - truncated on mobile */}
                    <p className="text-concrete/90 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-3 md:line-clamp-none">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-roman-coffee/20 pt-3 md:pt-4">
                      <p className="font-heading font-bold text-concrete text-sm md:text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-concrete/60 text-xs md:text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <p className="text-gold text-xs md:text-sm font-medium mt-1">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - larger touch targets */}
          <div className="flex justify-center items-center gap-3 md:gap-4 mt-6 md:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-roman-coffee/30 text-concrete hover:bg-roman-coffee/20 hover:border-gold/50 w-11 h-11 md:w-10 md:h-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots - larger touch targets */}
            <div className="flex items-center gap-2 md:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-3 md:h-2 rounded-full transition-all duration-300 min-w-[12px] ${
                    index === selectedIndex
                      ? "bg-gold w-6 md:w-6"
                      : "bg-roman-coffee/40 hover:bg-roman-coffee/60 w-3 md:w-2"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-roman-coffee/30 text-concrete hover:bg-roman-coffee/20 hover:border-gold/50 w-11 h-11 md:w-10 md:h-10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
