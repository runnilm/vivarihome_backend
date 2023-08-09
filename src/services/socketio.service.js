import { io } from 'socket.io-client';

class SocketioService {
    socket;

    constructor() {
        this.test;
    }

    setupSocketConnection() {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);

        this.socket.on('data', data => {
            console.log(data);
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }

    toggleUV() {
        this.socket.emit('toggleUV');
    }

    toggleMister() {
        this.socket.emit('toggleMister');
    }

    toggleBasking() {
        this.socket.emit('toggleBasking');
    }

    toggleCHE() {
        this.socket.emit('toggleCHE');
    }

    toggleLED() {
        this.socket.emit('toggleLED');
    }
}

export default new SocketioService();