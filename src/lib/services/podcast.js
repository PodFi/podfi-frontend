import Podcast from "../models/podcast";
import nanoid from "nanoid"

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
};

class PodcastService {
  createPodcast() {
    // logic to create a podcast goes here

    const podcastId = nanoid()
  }

  async initLocalStream () {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    return stream
  }

  async joinPodcast(id) {
    // logic to join a podcast goes here

    const peerConnection = new RTCPeerConnection(servers);
    const localStream = await this.initLocalStream()

    return new Podcast(peerConnection, localStream)
  }
}

export default PodcastService
