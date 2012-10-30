#pragma strict
// Some code by Matt Evett

private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
 
var doorOpenTime : float = 3.0;
var doorOpenSound : AudioClip;
var doorShutSound : AudioClip;
 
 
function Start () {
     doorTimer = 0.0f;
}
 
function Door(aClip : AudioClip, openCheck : boolean, animName : String){
     audio.PlayOneShot(aClip);
     doorIsOpen = openCheck;
     transform.parent.animation.Play(animName);
}
 
function DoorCheck() {
     if (!doorIsOpen) {
          Door(doorOpenSound,true,"dooropen");
     }
}
 
function Update(){
     if(doorIsOpen){
          doorTimer += Time.deltaTime;
         
          if(doorTimer > doorOpenTime){
              Door(doorShutSound, false, "doorshut");
              doorTimer = 0.0;
          }
     }   
}
 
 
 
@script RequireComponent(AudioSource)
