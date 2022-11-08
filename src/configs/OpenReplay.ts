import OpenReplay from '@openreplay/tracker';
import trackerAssist from '@openreplay/tracker-assist';
import trackerAxios from '@openreplay/tracker-axios';

const tracker = new OpenReplay({
    projectKey: "PyR18rN6EOFXo49pSxkk",
});

tracker.use(trackerAssist());
tracker.use(trackerAxios());


export default tracker