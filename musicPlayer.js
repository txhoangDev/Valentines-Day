export default class MusicPlayer {
    constructor(artist, song) {
        this.artist = artist;
        this.title = song;
    }

    render() {
        return `
        <div>
          <style>
            .music-card {
              cursor: pointer;
              width: 100%;
              max-width: 340px;
              margin: 0 auto;
              background-color: #f7f7f7;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
              overflow: hidden;
              transition: transform 0.3s ease;
            }

            .music-card:hover {
              transform: translateY(-5px);
            }

            .card-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px;
              background-color: #fff;
            }

            .track-info {
              display: flex;
              align-items: center;
            }

            .track-icon {
              height: 24px;
              width: 24px;
              color: #f59e0b;
            }

            .track-details {
              margin-left: 12px;
            }

            .track-title {
              font-size: 1.2rem;
              font-weight: 600;
              color: #333;
            }

            .track-artist {
              font-size: 0.9rem;
              color: #666;
            }

            .card-icons {
              display: flex;
              align-items: center;
            }

            .icon-heart {
              height: 24px;
              width: 24px;
              color: #ef4444;
              cursor: pointer;
            }

            .icon-star {
              height: 24px;
              width: 24px;
              color: #9ca3af;
              margin-left: 16px;
              cursor: pointer;
            }

            .icon-star:hover {
              color: #fbbf24;
            }

            .progress-container {
              position: relative;
              margin: 16px 16px 8px 16px;
              height: 6px;
              background-color: #e5e7eb;
              border-radius: 3px;
              overflow: hidden;
            }

            .progress-bar {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 60%;
              background-color: #f59e0b;
              border-radius: 3px;
            }

            .progress-time {
              display: flex;
              justify-content: space-between;
              padding: 0 16px 16px 16px;
              font-size: 0.85rem;
              color: #6b7280;
            }

            @keyframes zoom-out {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              75% {
                transform: scale(1);
                opacity: 1;
              }
              100% {
                transform: scale(0);
                opacity: 0;
              }
            }
          </style>
          <div class="music-card">
            <div class="card-header">
              <div class="track-info">
                <svg
                  class="track-icon"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                <div class="track-details">
                  <span class="track-title" id="music-title">${this.title}</span>
                  <p class="track-artist" id="music-artist">${this.artist}</p>
                </div>
              </div>
              <div class="card-icons">
                <svg
                  class="icon-heart"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                <svg
                  class="icon-star"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  ></polygon>
                </svg>
              </div>
            </div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
            <div class="progress-time"><span>02:20</span><span>3:35</span></div>
          </div>
        </div>
        `
    }
}