import { createNanoEvents } from 'nanoevents'

class Podcast {
  constructor(id, peerConnection, localStream) {
    this.eventEmitter = createNanoEvents()

    this.id = id
    this.peerConnection = peerConnection
    this.streams = {
      local: localStream,
      remote: new MediaStream()
    }

    this.setup()
  }

  async setup() {
    this.peerConnection.addEventListener("negotiationneeded", async () => {
      await this.peerConnection.setLocalDescription(
        await peerConnection.createOffer(),
      );

      if (this.peerConnection.localDescription) {
        offer = peerConnection.localDescription;
      }
    });

    localStream.getTracks().forEach((track) => {
      this.peerConnection.addTrack(track, localStream);
    });

    this.peerConnection.addEventListener("track", (e) => {
      console.log(e.streams);
      console.log("got a new stream", e.streams[0].id);
      e.streams[0].getTracks().forEach((track) => {
        console.log("added a track to remote stream");
        this.stream.addTrack(track);
      });
    });

    this.peerConnection.addEventListener("connectionstatechange", () => {
      switch (peerConnection.connectionState) {
        case "connected": {
          this.#eventEmitter.emit("connected")
        }
      }
    });

    const candidates = [];
    this.peerConnection.addEventListener("icecandidate", async (event) => {
      if (event.candidate) {
        candidates.push(event.candidate);
      }
    });

    peerConnection.addEventListener("icegatheringstatechange", async (e) => {
      const connection = e.target;

      switch (connection?.iceGatheringState) {
        case "complete": {
          // TODO: set ice candidates on the Contract

          JSON.stringify({
            candidates: candidatees.map(c => c.toJSON()),
            offer: {
              sdp: offer.sdp,
              type: offer.type
            }
          })

          break;
        }
      }
    });
  }

  onConnected(callback) {
    this.eventEmitter.on("connected", () => callback(this.streams))
  }
}

export default Podcast
