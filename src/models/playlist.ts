/*ExpertTags*/
export class ExpertTags {}

/*Experts*/
export class Experts {}

/*RemarkName*/
export class RemarkName {}

/*Subscribers*/
export class Subscribers {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: ExpertTags
  experts: Experts
  djStatus: number
  vipType: number
  remarkName: RemarkName
  authenticationTypes: number
  avatarDetail: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

/*AvatarDetail*/
export class AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

/*Creator*/
export class Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: ExpertTags
  experts: Experts
  djStatus: number
  vipType: number
  remarkName: RemarkName
  authenticationTypes: number
  avatarDetail: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

/*Ar*/
export class Ar {
  id: number
  name: string
  tns: any
  alias: any
}

/*Rt*/
export class Rt {}

/*Crbt*/
export class Crbt {}

/*Al*/
export class Al {
  id: number
  name: string
  picUrl: string
  tns: any
  pic_str: string
  pic: number
}

/*H*/
export class H {
  br: number
  fid: number
  size: number
  vd: number
}

/*M*/
export class M {
  br: number
  fid: number
  size: number
  vd: number
}

/*L*/
export class L {
  br: number
  fid: number
  size: number
  vd: number
}

/*Sq*/
export class Sq {
  br: number
  fid: number
  size: number
  vd: number
}

/*Hr*/
export class Hr {}

/*A*/
export class A {}

/*RtUrl*/
export class RtUrl {}

/*OriginSongSimpleData*/
export class OriginSongSimpleData {}

/*TagPicList*/
export class TagPicList {}

/*SongJumpInfo*/
export class SongJumpInfo {}

/*EntertainmentTags*/
export class EntertainmentTags {}

/*NoCopyrightRcmd*/
export class NoCopyrightRcmd {}

/*Rurl*/
export class Rurl {}

/*Tracks*/
export class Tracks {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: any
  pop: number
  st: number
  rt: Rt
  fee: number
  v: number
  crbt: Crbt
  cf: string
  al: Al
  dt: number
  h: H
  m: M
  l: L
  sq: Sq
  hr: Hr
  a: A
  cd: string
  no: number
  rtUrl: RtUrl
  ftype: number
  rtUrls: any
  djId: number
  copyright: number
  s_id: number
  mark: number
  originCoverType: number
  originSongSimpleData: OriginSongSimpleData
  tagPicList: TagPicList
  resourceState: boolean
  version: number
  songJumpInfo: SongJumpInfo
  entertainmentTags: EntertainmentTags
  single: number
  noCopyrightRcmd: NoCopyrightRcmd
  rurl: Rurl
  mst: number
  cp: number
  mv: number
  rtype: number
  publishTime: number
  alg: string
}

/*VideoIds*/
export class VideoIds {}

/*Videos*/
export class Videos {}

/*Sc*/
export class Sc {}

/*TrackIds*/
export class TrackIds {
  id: number
  v: number
  t: number
  at: number
  alg: string
  uid: number
  rcmdReason: string
  sc: Sc
}

/*RemixVideo*/
export class RemixVideo {}

/*SharedUsers*/
export class SharedUsers {}

/*HistorySharedUsers*/
export class HistorySharedUsers {}

/*Playlist*/
export class Playlist {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgId_str: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: string[]
  updateFrequency: string
  backgroundCoverId: number
  backgroundCoverUrl: string
  titleImage: number
  titleImageUrl: string
  englishTitle: string
  officialPlaylistType: string
  subscribers: Subscribers[]
  subscribed: boolean
  creator: Creator
  tracks: Tracks[]
  videoIds: VideoIds
  videos: Videos
  trackIds: TrackIds[]
  shareCount: number
  commentCount: number
  remixVideo: RemixVideo
  sharedUsers: SharedUsers
  historySharedUsers: HistorySharedUsers
}

/*Urls*/
export class Urls {}

/*Pc*/
export class Pc {}

/*Rscl*/
export class Rscl {}

/*ListenType*/
export class ListenType {}

/*FreeTrialPrivilege*/
export class FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType: ListenType
}

/*ChargeUrl*/
export class ChargeUrl {}

/*ChargeMessage*/
export class ChargeMessage {}

/*ChargeInfoList*/
export class ChargeInfoList {
  rate: number
  chargeUrl: ChargeUrl
  chargeMessage: ChargeMessage
  chargeType: number
}

/*Privileges*/
export class Privileges {
  id: number
  fee: number
  payed: number
  realPayed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  pc: Pc
  toast: boolean
  flag: number
  paidBigBang: boolean
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: Rscl
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

/*SharedPrivilege*/
export class SharedPrivilege {}

/*ResEntrance*/
export class ResEntrance {}

export class RelatedVideos {}

/*IPlaylistItem*/
export class IPlaylistItem {
  code: number
  relatedVideos: RelatedVideos
  playlist: Playlist
  urls: Urls
  privileges: Privileges[]
  sharedPrivilege: SharedPrivilege
  resEntrance: ResEntrance
}
