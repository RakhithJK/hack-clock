from datetime import datetime
from Libs.SevenSegment import Display
from Libs.Clock import Clock
from Libs.GStreamer import Speaker

Is_Evening = None
Proper_Hour = None

display = Display()

"""Update the clock's display
"""
def showCurrentTime():
  global Is_Evening, Proper_Hour
  Is_Evening = datetime.now().hour >= 12
  Proper_Hour = datetime.now().hour - 12 if Is_Evening else datetime.now().hour
  display.setHours(Proper_Hour);
  display.setColon(Is_Evening);
  display.setMinutes(datetime.now().minute);

speaker = Speaker()

"""Describe this function...
"""
def playMusic():
  global Is_Evening, Proper_Hour
  speaker.playList([AmicusMeus.ogg, TestTrack.ogg]);


clock.onTick(showCurrentTime);
display.setBrightness(11);

clock.atTime(8, 30, playMusic);
