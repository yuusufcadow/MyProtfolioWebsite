import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
} from "motion/react";

interface AsciiPixel {
  char: string;
  r: number;
  g: number;
  b: number;
}

interface AsciiArtProps {
  src: string;
  resolution?: number;
  charset?: string;
  color?: string;
  backgroundColor?: string;
  colored?: boolean;
  animated?: boolean;
  className?: string;
}

export default function AsciiArt({
  src,
  resolution = 85,
  charset = " 01",
  color = "#3b82f6",
  backgroundColor = "transparent",
  colored = false,
  animated = true,
  className = "",
}: AsciiArtProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null
    );

  const [asciiData, setAsciiData] =
    useState<AsciiPixel[][]>([]);

  const [loaded, setLoaded] =
    useState<boolean>(false);

  const [error, setError] =
    useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;

    const image =
      new Image();

    image.src = src;

    image.onload = () => {
      if (cancelled) {
        return;
      }

      const canvas =
        document.createElement(
          "canvas"
        );

      const context =
        canvas.getContext(
          "2d"
        );

      if (!context) {
        setError(true);
        return;
      }

      const columns =
        resolution;

      const rows =
        Math.floor(
          columns * 0.6
        );

      canvas.width =
        columns;

      canvas.height =
        rows;

      const imageWidth =
        image.naturalWidth;

      const imageHeight =
        image.naturalHeight;

      const imageAspect =
        imageWidth /
        imageHeight;

      const targetAspect = 1;

      let sourceX = 0;
      let sourceY = 0;

      let sourceWidth =
        imageWidth;

      let sourceHeight =
        imageHeight;

      if (
        imageAspect >
        targetAspect
      ) {
        sourceWidth =
          imageHeight *
          targetAspect;

        sourceX =
          (
            imageWidth -
            sourceWidth
          ) / 2;
      } else {
        sourceHeight =
          imageWidth /
          targetAspect;

        sourceY =
          (
            imageHeight -
            sourceHeight
          ) / 2;
      }

      context.drawImage(
        image,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        0,
        0,
        columns,
        rows
      );

      const imageData =
        context.getImageData(
          0,
          0,
          columns,
          rows
        );

      const pixels =
        imageData.data;

      const result:
        AsciiPixel[][] = [];

      for (
        let y = 0;
        y < rows;
        y++
      ) {
        const row:
          AsciiPixel[] = [];

        for (
          let x = 0;
          x < columns;
          x++
        ) {
          const index =
            (
              y *
                columns +
              x
            ) * 4;

          const r =
            pixels[index];

          const g =
            pixels[
              index + 1
            ];

          const b =
            pixels[
              index + 2
            ];

          const brightness =
            (
              0.299 * r +
              0.587 * g +
              0.114 * b
            ) / 255;

          const characterIndex =
            Math.min(
              charset.length - 1,
              Math.floor(
                brightness *
                  charset.length
              )
            );

          row.push({
            char:
              charset[
                characterIndex
              ] || " ",
            r,
            g,
            b,
          });
        }

        result.push(row);
      }

      setAsciiData(
        result
      );

      setLoaded(true);
    };

    image.onerror = () => {
      if (!cancelled) {
        setError(true);
      }
    };

    return () => {
      cancelled = true;
    };
  }, [
    src,
    resolution,
    charset,
  ]);

  const draw =
    useCallback(() => {
      const canvas =
        canvasRef.current;

      const container =
        containerRef.current;

      if (
        !canvas ||
        !container ||
        asciiData.length ===
          0
      ) {
        return;
      }

      const context =
        canvas.getContext(
          "2d"
        );

      if (!context) {
        return;
      }

      const width =
        container.clientWidth;

      const height =
        container.clientHeight;

      if (
        !width ||
        !height
      ) {
        return;
      }

      const dpr =
        window.devicePixelRatio ||
        1;

      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      context.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      if (
        backgroundColor !==
        "transparent"
      ) {
        context.fillStyle =
          backgroundColor;

        context.fillRect(
          0,
          0,
          width,
          height
        );
      } else {
        context.clearRect(
          0,
          0,
          width,
          height
        );
      }

      const rows =
        asciiData.length;

      const columns =
        asciiData[0]
          ?.length || 0;

      if (!columns) {
        return;
      }

      const charWidth =
        width /
        columns;

      const charHeight =
        height /
        rows;

      const fontSize =
        Math.min(
          charWidth *
            1.8,
          charHeight *
            1.15
        );

      context.font =
        `${fontSize}px monospace`;

      context.textBaseline =
        "top";

      context.textAlign =
        "center";

      for (
        let y = 0;
        y < rows;
        y++
      ) {
        for (
          let x = 0;
          x < columns;
          x++
        ) {
          const pixel =
            asciiData[y][x];

          const positionX =
            x *
              charWidth +
            charWidth /
              2;

          const positionY =
            y *
            charHeight;

          context.fillStyle =
            colored
              ? `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`
              : color;

          context.fillText(
            pixel.char,
            positionX,
            positionY
          );
        }
      }
    }, [
      asciiData,
      backgroundColor,
      color,
      colored,
    ]);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    draw();

    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    const observer =
      new ResizeObserver(
        draw
      );

    observer.observe(
      container
    );

    return () => {
      observer.disconnect();
    };
  }, [
    loaded,
    draw,
  ]);

  if (error) {
    return null;
  }

  return (
    <motion.div
      ref={
        containerRef
      }
      initial={
        animated
          ? {
              opacity: 0,
            }
          : false
      }
      whileInView={
        animated
          ? {
              opacity: 1,
            }
          : undefined
      }
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.1,
      }}
      className={`
        relative
        overflow-hidden
        ${className}
      `}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="
          block
          h-full
          w-full
        "
      />
    </motion.div>
  );
}