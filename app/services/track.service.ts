import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Event,
} from 'react-native-track-player';
import {prayers} from '../features/prayers/prayers.slice';
import {
  nextRosaryPrayer,
  pauseRosary,
  playRosary,
  previousRosaryPrayer,
} from '../features/rosaries/rosaries.slice';
import store from '../store';

export async function setup() {
  let isSetup = false;

  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 0.1,
    });

    await TrackPlayer.add(
      prayers.map(p => {
        return {
          id: p.id,
          url: p.audioPath,
          title: p.name,
          artist: 'Latin Rosary',
          data: p,
        };
      }),
    );

    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function TrackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    store.dispatch(pauseRosary());
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    store.dispatch(playRosary());
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    store.dispatch(nextRosaryPrayer());
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    store.dispatch(previousRosaryPrayer());
  });
}
