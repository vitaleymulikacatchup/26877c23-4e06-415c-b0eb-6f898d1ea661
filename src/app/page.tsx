"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Coffee, Flame, Users, Leaf } from "lucide-react";

export default function CoffeeShop() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="radialGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="Coffee Haven"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardCorners 
          title="Discover Authentic Coffee Crafted with Passion"
          description="Experience the finest specialty coffee, roasted to perfection and served with exceptional care. Join our community of coffee enthusiasts."
          tag="Premium Coffee Experience"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149481481-hy2v590e.jpg",
              imageAlt: "Coffee shop espresso machine"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149482849-lwa87gfv.jpg",
              imageAlt: "Latte with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149484028-jsdvlg6x.jpg",
              imageAlt: "Coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149485250-lmu6yn2x.jpg",
              imageAlt: "Barista pouring coffee"
            }
          ]}
          buttons={[
            { text: "Explore Menu", href: "menu" },
            { text: "Visit Us Today", href: "contact" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature 
          title="Our commitment to excellence in every cup. We source the finest beans globally, roast them with precision, and brew with passion to deliver an unforgettable coffee experience."
          features={[
            {
              icon: Coffee,
              title: "Single Origin Beans",
              description: "We carefully select beans from the world's best coffee regions, ensuring unique flavor profiles and exceptional quality."
            },
            {
              icon: Flame,
              title: "Expert Roasting",
              description: "Our master roasters bring out the perfect balance of flavor, aroma, and body in every batch."
            },
            {
              icon: Users,
              title: "Community First",
              description: "More than a coffee shop—we're a gathering place for coffee lovers to connect and share their passion."
            },
            {
              icon: Leaf,
              title: "Sustainable Sourcing",
              description: "We partner with farmers who practice ethical and environmentally responsible coffee cultivation."
            }
          ]}
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardThree 
          title="Our Signature Menu"
          description="Explore our carefully curated selection of specialty coffee drinks, crafted to perfection by our expert baristas."
          tag="Featured Selections"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "cappuccino",
              name: "Classic Cappuccino",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149486469-b3lpkz3x.jpg",
              imageAlt: "Cappuccino with foam art",
              initialQuantity: 1
            },
            {
              id: "americano",
              name: "Bold Americano",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149487796-ir69l2sb.jpg",
              imageAlt: "Rich americano coffee",
              initialQuantity: 1
            },
            {
              id: "latte",
              name: "Smooth Latte",
              price: "$5.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149489040-wj98aksu.jpg",
              imageAlt: "Creamy latte drink",
              initialQuantity: 1
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour 
          title="What Our Coffee Lovers Say"
          description="Hear from customers who have made Coffee Haven their favorite morning ritual."
          tag="Customer Testimonials"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149490231-hak2mnzj.jpg",
              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Software Engineer",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149491613-xuok2fiz.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Writer & Blogger",
              company: "Content Creation",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149492815-bvyqxy43.jpg",
              imageAlt: "Elena Rodriguez"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Entrepreneur",
              company: "Business Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149493963-p7mtbyqg.jpg",
              imageAlt: "Michael Thompson"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit 
          tag="Newsletter"
          title="Stay Connected"
          description="Subscribe to our newsletter for exclusive coffee recipes, brewing tips, and special offers delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764149495636-lpnso9ui.jpg"
          imageAlt="Coffee shop interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive emails from Coffee Haven. We respect your privacy and never spam."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal 
          copyrightText="© 2025 Coffee Haven. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Friday: 6am - 8pm" },
                { label: "Saturday: 7am - 9pm" },
                { label: "Sunday: 7am - 7pm" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Coffee Street" },
                { label: "Downtown District" },
                { label: "Call: (555) 123-4567" }
              ]
            },
            {
              title: "Follow Us",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}