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
            "linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(255, 255, 255, 1) 90%)",
        }}
      >
        <div className="-z-10 relative w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default FadedOverlay;
