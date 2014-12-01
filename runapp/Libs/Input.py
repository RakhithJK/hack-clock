import wiringpi2
import threading
import time

class Button(threading.Thread):
  __RESOLUTION = 100
  __running = True
  __initialState = 0
  __previousState = 0

  def __init__(self, pinNumber):
    threading.Thread.__init__(self)

    self.daemon = True
    self.pinNumber = pinNumber

    wiringpi2.wiringPiSetupSys()
    self.__initialState = wiringpi2.digitalRead(self.pinNumber)
    self.__previousState = self.__initialState

  def run(self):
    while self.__running:
      state = wiringpi2.digitalRead(self.pinNumber)
      if state != self.__previousState:
        self.onStateChange(state)

      time.sleep(self.__RESOLUTION / 1000.0)

  def onStateChange(self, state):
    if state != self.__initialState:
      self.myFunction()

  def whenPressed(self, myFunction):
    self.myFunction = myFunction
    self.start()
