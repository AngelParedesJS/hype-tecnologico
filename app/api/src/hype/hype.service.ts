import { Injectable, Logger } from "@nestjs/common";
import { data, getRelativeTime } from "../common";
import { VideoItem, VideosDataResponse } from "src/common/interfaces";

@Injectable()
export class HypeService {
  constructor() {}

  private readonly logger = new Logger("HypeService");

  getHype() {
    let videos = data.items.map((item: VideoItem) => {
      const likes = parseInt(item.statistics.likeCount || '0', 10);
      const views = parseInt(item.statistics.viewCount || '0', 10);
      const comments = parseInt(item.statistics.commentCount || '0', 10);
      const videoTitle = item.snippet.title.toLowerCase();

      let hype = 0;
      if (views > 0) {
        hype = (likes + comments) / views;
        if (comments === 0) hype = 0;
        if (RegExp("tutorial", "i").test(videoTitle)) hype *= 2;
      }

      return {
        video: item,
        FriendlyDate: getRelativeTime(item.snippet.publishedAt),
        Hype: hype,
      };
    }).sort((a,b) => b.Hype - a.Hype);
    return videos;
  }
}
