import React, { useState } from 'react';

const Description = ({formattedViewCount, formatRelativeTime, PublishAt, description, tags}) => {
  const initialText = description;

  const [showMore, setShowMore] = useState(false);
  const truncatedText = showMore ? initialText : initialText.slice(0, 280);

  return (
    <div className='w-full bg-[#272727] rounded-lg p-2 text-[14px]'>
      <div className='w-full h-full flex gap-2 items-center'>
        <p>{formattedViewCount} x ditonton</p>
        <p>{formatRelativeTime(new Date(PublishAt))}</p>
        <p className='text-[#aaaaaa] text-[14px]'>
          #{tags.slice(0, 5).join(' #').substring(0, 100)}
          {tags.length > 5 && '...'}
        </p>
      </div>
      <div className='w-full h-full pr-[30px]'>
        {truncatedText}
      </div>
      {initialText.length > 281 && (
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Lebih sedikit' : '...lainnya'}
        </button>
      )}
    </div>
  );
};

export default Description;
