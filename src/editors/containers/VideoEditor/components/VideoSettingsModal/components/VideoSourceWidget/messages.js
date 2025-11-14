import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  titleLabel: {
    id: 'authoring.videoeditor.videoSource.title.label',
    defaultMessage: 'Nguồn video',
    description: 'Tiêu đề cho phần nguồn video',
  },
  videoIdLabel: {
    id: 'authoring.videoeditor.videoSource.videoId.label',
    defaultMessage: 'Mã video',
    description: 'Nhãn cho trường Mã video',
  },
  videoIdFeedback: {
    id: 'authoring.videoeditor.videoSource.videoId.feedback',
    defaultMessage: 'Nếu bạn được edX cấp một mã video, hãy nhập mã đó tại đây.',
    description: 'Hướng dẫn cho trường Mã video',
  },
  videoUrlLabel: {
    id: 'authoring.videoeditor.videoSource.videoUrl.label',
    defaultMessage: 'URL video',
    description: 'Nhãn cho trường URL video',
  },
  videoUrlFeedback: {
    id: 'authoring.videoeditor.videoSource.videoUrl.feedback',
    defaultMessage: `URL của video. Trường này có thể là URL YouTube hoặc liên kết
    tới tệp video .mp4, .ogg hoặc .webm được lưu trữ ở nơi khác trên internet.`,
    description: 'Hướng dẫn cho trường URL video',
  },
  videoIdChangeAlert: {
    id: 'authoring.videoeditor.videoIdChangeAlert.message',
    defaultMessage: 'Trường Mã video đã thay đổi, vui lòng kiểm tra lại các giá trị URL video và URL dự phòng và cập nhật nếu cần.',
    description: 'Thông báo hiển thị khi Mã video bị thay đổi',
  },
  fallbackVideoTitle: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.title',
    defaultMessage: 'Video dự phòng',
    description: 'Tiêu đề cho phần video dự phòng',
  },
  fallbackVideoMessage: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.message',
    defaultMessage: `Để đảm bảo tất cả học viên đều có thể xem video, khuyến nghị cung cấp thêm
    các phiên bản video ở định dạng .mp4 và .webm. Video đầu tiên trong danh sách
    tương thích với thiết bị của học viên sẽ được phát.`,
    description: 'Giải thích lý do cần video dự phòng',
  },
  fallbackVideoLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.label',
    defaultMessage: 'URL video',
    description: 'Nhãn cho trường URL video dự phòng',
  },
  deleteFallbackVideo: {
    id: 'authoring.videoeditor.videoSource.deleteFallbackVideo',
    defaultMessage: 'Xóa',
    description: 'Hành động xóa một video dự phòng',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowDownloadCheckboxLabel',
    defaultMessage: 'Cho phép tải video xuống',
    description: 'Nhãn cho checkbox cho phép tải video',
  },
  allowDownloadTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowDownloadTooltipMessage',
    defaultMessage: `Cho phép học viên tải các phiên bản của video này ở nhiều định dạng khác nhau
    nếu họ không thể sử dụng trình phát video của edX hoặc không truy cập được YouTube.`,
    description: 'Giải thích cho tùy chọn cho phép tải video xuống',
  },
  allowVideoSharingCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingCheckboxLabel',
    defaultMessage: 'Cho phép chia sẻ video này lên mạng xã hội.',
    description: 'Nhãn cho checkbox cho phép chia sẻ video',
  },
  allowVideoSharingTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingTooltipMessage',
    defaultMessage: `Cho phép học viên chia sẻ công khai video này lên mạng xã hội.
    Video sẽ có thể xem được bởi bất kỳ ai, không cần ghi danh vào khóa học
    hay có tài khoản edX. Liên kết đến trang giới thiệu khóa học và trang ghi danh
    sẽ hiển thị bên cạnh video.`,
    description: 'Giải thích cho tùy chọn cho phép chia sẻ video',
  },
  addButtonLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.addButtonLabel',
    defaultMessage: 'Thêm URL video',
    description: 'Nhãn cho nút thêm URL video dự phòng',
  },
});

export default messages;
