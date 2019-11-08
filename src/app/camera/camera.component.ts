import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, AfterViewInit {
  @ViewChild('video', {static: false}) video: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  captures: Array<any>;
  videoTracks: any;

  constructor() {
    this.captures = [];
  }

  ngOnInit() {
    if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
      console.log("Let's get this party started")
    }
  }

  ngAfterViewInit(){
    console.log(navigator);

    // browser.getUserMedia = (browser.getUserMedia ||
    //   browser.webkitGetUserMedia ||
    //   browser.mozGetUserMedia ||
    //   browser.msGetUserMedia);

    // if(!browser) {
    //   console.error('getUserMedia is not implemented in this browser');
    // }

    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // const stream = await navigator.mediaDevices.getUserMedia({video: true})

      console.log('getUserMedia is implemented in this navigator');

      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        console.log('stream',stream)
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
        //this.videoTracks = stream.getVideoTracks();
      }).catch(err => {
         //log to console first
         console.error(err); /* handle the error */
         if (err.name == "NotFoundError" || err.name == "DevicesNotFoundError") {
             //required track is missing
         } else if (err.name == "NotReadableError" || err.name == "TrackStartError") {
             //webcam or mic are already in use
         } else if (err.name == "OverconstrainedError" || err.name == "ConstraintNotSatisfiedError") {
             //constraints can not be satisfied by avb. devices
         } else if (err.name == "NotAllowedError" || err.name == "PermissionDeniedError") {
             //permission denied in browser
         } else if (err.name == "TypeError" || err.name == "TypeError") {
             //empty constraints object
         } else {
             //other errors
         }
      });
    }
  }


  capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    console.log('context',context);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    //this.videoTracks.forEach(track => {track.stop()});

  }
}
