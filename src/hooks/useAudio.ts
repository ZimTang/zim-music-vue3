import useAudioStore from '@/stores/audio'
import useSongSheetItemStore from '@/stores/song-sheet-item'
export const useAudio = () => {
  const audioStore = useAudioStore()
  const songSheetItemStore = useSongSheetItemStore()

  // 改变排序
  const changeOrder = (audio: any) => {
    audioStore.audioList.find((item, index) => {
      if (item.id == audio.id) {
        audioStore.order = index
        localStorage.setItem('order', index.toString())
        return item.id === audio.id
      }
    })
  }

  // 在歌单里播放单首歌曲
  const playAudio = (audio: any) => {
    if (audio.id === audioStore.audioId) return
    localStorage.setItem(
      'audioList',
      JSON.stringify(songSheetItemStore.songSheetSongs.songs)
    )
    audioStore.changeAudioList(songSheetItemStore.songSheetSongs.songs)
    changeOrder(audio)
    audioStore.audioId = audio.id
    localStorage.setItem('audioId', audio.id)
  }

  // 播放全部
  const handlePlayAll = () => {
    localStorage.setItem(
      'audioList',
      JSON.stringify(songSheetItemStore.songSheetSongs.songs)
    )
    audioStore.changeAudioList(songSheetItemStore.songSheetSongs.songs)
    localStorage.setItem('audioId', audioStore.audioList[0].id.toString())
    audioStore.audioId = audioStore.audioList[0].id
    audioStore.order = 1
  }

  return { playAudio, changeOrder, handlePlayAll }
}
