import { PlaylistType } from '@/models/audio'
import { ISong } from '@/models/playlist'
import useAlbumStore from '@/stores/album'
import useAudioStore from '@/stores/audio'
import useplaylistDetailStore from '@/stores/playlist-detail'

export const useAudio = (
  isNotClickAudioList: boolean = true,
  type: PlaylistType = PlaylistType.playlist
) => {
  const audioStore = useAudioStore()
  const playlistDetailStore = useplaylistDetailStore()
  const albumStore = useAlbumStore()

  // 改变排序
  const changeOrder = (audio: ISong) => {
    audioStore.audioList.find((item, index) => {
      if (item.id == audio.id) {
        audioStore.order = index
        localStorage.setItem('order', index.toString())
        return item.id === audio.id
      }
    })
  }

  // 在歌单里播放单首歌曲
  const playAudio = (audio: ISong) => {
    if (audio.id === audioStore.audioId) return
    // 判断是否点击的是播放列表里面的item 而不是右侧弹出的当前播放列表的item
    if (isNotClickAudioList) {
      if (type === PlaylistType.playlist) {
        localStorage.setItem(
          'audioList',
          JSON.stringify(playlistDetailStore.playlistSongs)
        )
        audioStore.changeAudioList(playlistDetailStore.playlistSongs)
      } else {
        localStorage.setItem('audioList', JSON.stringify(albumStore.songs))
        audioStore.changeAudioList(albumStore.songs)
      }
    }
    changeOrder(audio)
    audioStore.audioId = audio.id
    localStorage.setItem('audioId', audio.id.toString())
  }

  // 播放全部
  const handlePlayAll = () => {
    localStorage.setItem(
      'audioList',
      JSON.stringify(playlistDetailStore.playlistSongs)
    )
    audioStore.changeAudioList(playlistDetailStore.playlistSongs)
    localStorage.setItem('audioId', audioStore.audioList[0].id.toString())
    audioStore.audioId = audioStore.audioList[0].id
    audioStore.order = 1
  }

  return { playAudio, changeOrder, handlePlayAll }
}
