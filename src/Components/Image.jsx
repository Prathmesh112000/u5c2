export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img src={src} alt={alt} style={{borderRadius,objectFit:{fit}}} width={width} height={height}   />
    </div>
  );
};
