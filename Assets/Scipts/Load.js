#pragma strict

//load in start menu buttons
public var start : Texture2D;
public var load : Texture2D;

//create a dynamic resolution so that everything changes with screen size.
private var wratio = 0.0;
private var hratio = 0.0;

function Start () {
//set resolution
	wratio = Screen.width; 
	hratio = Screen.height;
	wratio = wratio / 750;
	hratio = hratio / 400;

}

function Update () {

}

function OnGUI(){
if (GUI.Button (Rect (40*wratio,320*hratio,128,58),start)){
print("start");
//The 1 value is set in the file>build settings for the main game scene
Application.LoadLevel (1);
}
if (GUI.Button (Rect (540*wratio,320*hratio,128,58),load))
print("load");
}