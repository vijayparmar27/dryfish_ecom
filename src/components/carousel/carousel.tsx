"use client";

import type React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { Box, IconButton, Button, Stack } from "@mui/material";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function Carousel({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback(
    (index: number) => {
      setIsTransitioning(true);
      setCurrentIndex(index % items.length);
    },
    [items.length]
  );

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setTouchEnd(e.clientX);
    handleSwipe();
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  if (items.length === 0) {
    return <Box>No items to display</Box>;
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 2,
        backgroundColor: "#000",
        height: { xs: 280, xl: 320 },
        cursor: "grab",
        "&:active": {
          cursor: "grabbing",
        },
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Main carousel container */}
      {items.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            position: "absolute",
            inset: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 700ms ease-in-out",
          }}
        >
          <Box
            component="img"
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,1), transparent, transparent)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              p: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                color: "white",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </Box>
            <Box
              component="p"
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.125rem" },
                color: "#d1d5db",
                mt: 1,
                mb: 2,
                margin: 0,
              }}
            >
              {item.description}
            </Box>
            {item.buttonText && item.buttonLink && (
              <Button
                component="a"
                href={item.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<Flag size={18} />}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "8px 24px",
                  width: "fit-content",
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  },
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {item.buttonText}
              </Button>
            )}
          </Box>
        </Box>
      ))}

      <IconButton
        onClick={goToPrevious}
        aria-label="Previous slide"
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          color: "white",
          padding: "8px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          transition: "all 200ms ease",
        }}
      >
        <ChevronLeft size={24} />
      </IconButton>

      <IconButton
        onClick={goToNext}
        aria-label="Next slide"
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          color: "white",
          padding: "8px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          transition: "all 200ms ease",
        }}
      >
        <ChevronRight size={24} />
      </IconButton>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          justifyContent: "center",
        }}
      >
        {items.map((_, index) => (
          <Box
            key={index}
            component="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            sx={{
              height: "8px",
              borderRadius: "4px",
              border: "none",
              backgroundColor:
                index === currentIndex ? "white" : "rgba(255, 255, 255, 0.5)",
              width: index === currentIndex ? "32px" : "8px",
              cursor: "pointer",
              transition: "all 300ms ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.75)",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
