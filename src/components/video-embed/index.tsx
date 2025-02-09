import React, { useState } from 'react'
import { PlayIcon } from '@remixicons/react/fill'
import './styles.css'
import classNames from 'classnames'

interface VideoEmbedProps {
  url: string
  title?: string
  className?: string
}

type VideoProvider = 'youtube' | 'vimeo'

  /**
   * React component for embedding a video from YouTube or Vimeo.
   *
   * @param {string} url - The URL of the video to embed.
   * @param {string} [title] - The title of the video.
   * @param {string} [className] - The CSS class name to apply to the component.
   *
   * @example
   * <VideoEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
   *
   * @returns {React.ReactElement} The video component.
   */
const VideoEmbed = ({ url, title = '', className = '' }: VideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const getVideoId = (url: string): { provider: VideoProvider; id: string } | null => {
    // YouTube
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/

    const youtubeMatch = url.match(youtubeRegex)
    if (youtubeMatch) {
      return { provider: 'youtube', id: youtubeMatch[1] }
    }

    // Vimeo
    const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/
    const vimeoMatch = url.match(vimeoRegex)
    if (vimeoMatch) {
      return { provider: 'vimeo', id: vimeoMatch[1] }
    }

    return null
  }

  const getEmbedUrl = (provider: VideoProvider, id: string): string => {
    switch (provider) {
      case 'youtube':
        return `https://www.youtube.com/embed/${id}?autoplay=1`
      case 'vimeo':
        return `https://player.vimeo.com/video/${id}?autoplay=1`
      default:
        return ''
    }
  }

  const getThumbnailUrl = (provider: VideoProvider, id: string): string => {
    switch (provider) {
      case 'youtube':
        return `https://img.youtube.com/vi/${id}/sddefault.jpg`
      case 'vimeo':
        // Note: Vimeo requires API call for thumbnail, using placeholder for now
        return `https://vumbnail.com/${id}.jpg`
      default:
        return ''
    }
  }

  const videoData = getVideoId(url)

  if (!videoData) {
    return <div className="video-error">Invalid video URL</div>
  }

  const { provider, id } = videoData
  const embedUrl = getEmbedUrl(provider, id)
  const thumbnailUrl = getThumbnailUrl(provider, id)

  return (
    <div className={
      classNames(
        'video-container',
        className
      )
    }>
      {!isPlaying ? (
        <button
          className="thumbnail-button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
        >
          <img
            src={thumbnailUrl}
            alt={title || 'Video thumbnail'}
            className="thumbnail"
            loading="lazy"
          />
          <div className="play-button">
            <PlayIcon className="" />
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title || 'Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        />
      )}
    </div>
  )
}

export default VideoEmbed
