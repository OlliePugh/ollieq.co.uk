interface FadedOverlayProps {
  children: React.ReactNode;
  enabled: boolean;
}

const FadedOverlay = ({ children, enabled }: FadedOverlayProps) => {
  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div className="w-full h-full relative">
      <div
        className="absolute top-0 right-0 left-0 bottom-0"
        style={{
          background:
            typeof window !== "undefined"
              ? "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0) 65%, rgba(255, 255, 255, 1) 90%)"
              : "",
        }}
      >
        <div style={{ zIndex: -1 }} className="relative w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FadedOverlay;
