import { Injectable, Logger } from "@nestjs/common";
import { data, getRelativeTime } from "../common";
import { VideoItem } from "src/common/interfaces";

@Injectable()
export class HypeService {
  private readonly logger = new Logger("HypeService");

  getHype() {
    const videos = data.items.map((item: VideoItem) => {
      const likes = parseInt(item.statistics.likeCount || '0', 10);
      const views = parseInt(item.statistics.viewCount || '0', 10);
      const comments = parseInt(item.statistics.commentCount || '0', 10);
      const videoTitle = item.snippet.title.toLowerCase();

      let hype = 0;
      if (views > 0) {
        hype = (likes + comments) / views;
        if (comments === 0) hype = 0;
        if (RegExp("tutorial", "i").test(videoTitle)) hype *= 2;
        hype = Math.round(hype * 100);
      }

      // Transform thumbnail URL to use placehold.co
      const originalUrl = new URL(item.snippet.thumbnails.high.url);
      const textMatch = originalUrl.searchParams.get("text");
      const text = textMatch ? decodeURIComponent(textMatch) : item.snippet.channelTitle;
      const thumbnailUrl = `https://placehold.co/640x360/444444/E0E0E0?text=${encodeURIComponent(text)}`;

      return {
        video: {
          ...item,
          snippet: {
            ...item.snippet,
            thumbnails: {
              high: {
                url: thumbnailUrl,
              },
            },
          },
        },
        FriendlyDate: getRelativeTime(item.snippet.publishedAt),
        Hype: hype,
      };
    }).sort((a, b) => b.Hype - a.Hype);

    return videos;
  }
}