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
    <section className="py-24 section-dark relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-blob bg-gold/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gold/10 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-blob bg-roman-coffee/5 blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="badge-gold mb-6">Client Testimonials</div>
          <h2 className="heading-lg text-concrete mb-4">
            Trusted by Builders Across{" "}
            <span className="text-gradient-gold">South-East QLD</span>
          </h2>
          <p className="body-lg text-concrete/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with The Gold Hire Company.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-0"
                >
                  <div className="card-dark h-full flex flex-col relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-gold" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4 pt-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-gold text-gold"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-concrete/90 text-lg leading-relaxed mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-roman-coffee/20 pt-4">
                      <p className="font-heading font-bold text-concrete">
                        {testimonial.author}
                      </p>
                      <p className="text-concrete/60 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <p className="text-gold text-sm font-medium mt-1">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-roman-coffee/30 text-concrete hover:bg-roman-coffee/20 hover:border-gold/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-gold w-6"
                      : "bg-roman-coffee/40 hover:bg-roman-coffee/60"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-roman-coffee/30 text-concrete hover:bg-roman-coffee/20 hover:border-gold/50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
