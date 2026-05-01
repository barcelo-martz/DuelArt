import React from "react";

interface ArtworkCardProps {
  status?: "IN BATTLE" | "FOR SALE";
  statusColor?: string;
  statusTextColor?: string;
  statusIcon?: React.ReactNode;
  image: string;
  alt: string;
  title: string;
  author: string;
  price?: string;
  likes?: string;
  views?: string;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({
  status,
  statusColor,
  statusTextColor,
  statusIcon,
  image,
  alt,
  title,
  author,
  price,
  likes,
  views,
}) => (
  <div className="artwork-card group relative rounded-xl overflow-hidden cursor-pointer bg-surface-container">
    {status && (
      <div className="absolute top-4 left-4 z-20">
        <span
          className={`${statusColor} ${statusTextColor} px-3 py-1 rounded-full font-label text-[10px] font-bold tracking-[0.15em] flex items-center gap-1`}
        >
          {status} {statusIcon}
        </span>
      </div>
    )}
    <img
      className="w-full h-56 md:h-72 lg:h-80 xl:h-96 object-cover transition-all duration-700 ease-in-out group-hover:grayscale-0 grayscale-[0.2]"
      src={image}
      alt={alt}
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <p className="font-headline italic text-primary text-xl mb-1">
          {title}
        </p>
        <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase mb-4">
          by @{author}
        </p>
        {price && (
          <p className="text-primary font-label font-bold text-sm tracking-widest">
            {price}
          </p>
        )}
        {(likes || views) && (
          <div className="flex items-center gap-4">
            {likes && (
              <span className="flex items-center gap-1 font-label text-[10px] tracking-tighter">
                <span className="material-symbols-outlined text-sm">
                  favorite
                </span>{" "}
                {likes}
              </span>
            )}
            {views && (
              <span className="flex items-center gap-1 font-label text-[10px] tracking-tighter">
                <span className="material-symbols-outlined text-sm">
                  visibility
                </span>{" "}
                {views}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ArtworkCard;
