test('testing mock function', () => {
    const mockCallback = jest.fn((x)=> { return 50 + (x*2)});
    expect(mockCallback(10)).toBe(70);
    expect(mockCallback).toHaveBeenCalled();
});


// imp to return, mockCallback, using jest.fn

//Spy testing - 
test('spying on a method of an object', () => {
    const video = {
      play() {
        return true;
      }
    };
    const spy = jest.spyOn(video, 'play'); 
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});
//This tracks the video when video is played
//spyOn - allows to observe the real function behaviour
// spy.mockRestore is used to retore the original implementation of the function