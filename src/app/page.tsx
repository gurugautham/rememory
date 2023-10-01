"use client";

import { useState } from "react";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("October 1st, 2023");
  const [currentSlide, setCurrentSlide] = useState(0);
  const dates = [
    "October 1st, 2023",
    "September 30th, 2023",
    "September 29th, 2023",
    "September 28th, 2023",
  ]; // Add more dates as needed

  const slides = [
    {
      image: "coding.jpg",
      title: "Part 1: Morning at the Coworking Space.",
      text: 'The morning started off like any other, with me seated at my designated spot in the coworking space. The air was filled with the hum of conversations and the rhythmic tapping of keyboards. I remember munching on a croissant, the flakes of which scattered all over my workspace. I voiced my discontent, "This croissant is very flaky... I don\'t like flaky croissants." But the buttery taste was irresistible, so I continued to eat. On my laptop, there was a flurry of activity as I typed away, making several attempts to start a new project with Yarn and Next.js. The commands included tyarn --version, app in yarn, and yarn create next-app. It seemed I was also having some trouble with my terminal, given the mistypes like rminal and Key.shift_rCode. But eventually, I made progress with commands like yarn install and searching how to update my node. In the middle of my coding spree, the idea of grabbing a coffee hit me. I quickly searched, "where is the nearest cafe to me?" before deciding to head out.',
    },
    {
      image: "coffee.jpg",
      title: "Part 2: Afternoon at the Coffee Shop.",
      text: 'By early afternoon, I found myself in a bustling coffee shop. The aroma of freshly brewed coffee was invigorating. Placing my order, I inquired about customizations, "Can you make it a single shot of espresso as well?" The barista was friendly, asking for my name and making small talk. While waiting for my coffee, I struck up a conversation with someone about universities, particularly Berkeley and Stanford. We exchanged experiences and future plans. They mentioned attending a hackathon and plans to hang out at Berkeley. We even discussed the distances between various cities in California and our personal experiences living in different parts of the state. They shared their love for New York and the desire to return there, while I reminisced about my time living in the vibrant city. The conversation flowed naturally, touching on our academic journeys, friends from different universities, and our aspirations for the future. The ambiance of the coffee shop, combined with the stimulating conversation, made the afternoon memorable. As time flew by, the realization that I had to get back to work dawned upon me. "Time to go," I said, making my way back to the coworking space, with the taste of coffee and the warmth of a delightful conversation lingering on.',
    },
    // { image: "image3.jpg", text: "Slide 3" },
  ]; // Add more slides as needed

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const prevSlide = () => {
    setCurrentSlide((oldSlide) =>
      oldSlide === 0 ? slides.length - 1 : oldSlide - 1
    );
  };

  const nextSlide = () => {
    console.log(currentSlide);
    setCurrentSlide((oldSlide) =>
      oldSlide === slides.length - 1 ? 0 : oldSlide + 1
    );
  };

  return (
    <div style={{ display: "flex", height: "95vh" }}>
      <div
        style={{
          flex: "1",
          borderRight: "1px solid #D3D3D3",
          height: "100%",
          padding: "10px",
        }}
      >
        {dates.map((date, index) => (
          <button
            key={index}
            style={{
              display: "block",
              width: "100%",
              height: "50px",
              marginBottom: "10px",
              backgroundColor:
                selectedDate === date
                  ? "#6C63FF"
                  : "#A6B1E1" /* Dark Blue or Light Blue based on selection */,
              border: "none",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "12px",
              marginLeft: "0",
            }}
            onClick={() => handleDateClick(date)}
          >
            {date}
          </button>
        ))}
      </div>
      <div
        style={{
          flex: "3",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px",
          width: "100%",
        }}
      >
        <div
          id="slideshow"
          style={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {slides.map((slide, index) => (
            <div
              className={`slide ${index === currentSlide ? "active" : ""}`}
              key={index}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <img src={slide.image} style={{ width: "35%" }} />
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <img src={currentSlide+"-0.png"} style={{ width: "35%" }}/>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "#6C63FF",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "12px",
            }}
            onClick={prevSlide}
          >
            Previous
          </button>
          <button
            style={{
              backgroundColor: "#6C63FF",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
              borderRadius: "12px",
            }}
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
