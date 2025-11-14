const messages = {
  // Gallery
  emptyGalleryLabel: {
    id: 'authoring.selectvideomodal.emptyGalleryLabel',
    defaultMessage: 'Không tìm thấy kết quả.',
    description: 'Label for when video gallery is empty.',
  },
  selectVideoButtonlabel: {
    id: 'authoring.selectvideomodal.selectvideo.label',
    defaultMessage: 'Chọn video',
    description: 'Label for Select video button',
  },
  titleLabel: {
    id: 'authoring.selectvideomodal.title.label',
    defaultMessage: 'Thêm video vào khóa học',
    description: 'Title for the select video modal',
  },
  uploadButtonLabel: {
    id: 'authoring.selectvideomodal.upload.label',
    defaultMessage: 'Tải lên hoặc nhúng video mới',
    description: 'Label for upload button',
  },
  videoUploadModalTitle: {
    id: 'authoring.selectvideomodal.upload.title',
    defaultMessage: 'Tải lên hoặc nhúng video mới',
    description: 'Label for upload modal',
  },
  videoEditorModalTitle: {
    id: 'authoring.selectvideomodal.edit.title',
    defaultMessage: 'Chỉnh sửa video đã chọn',
    description: 'Label for editor modal',
  },

  // Sort Dropdown
  sortByDateNewest: {
    id: 'authoring.selectvideomodal.sort.datenewest.label',
    defaultMessage: 'mới nhất',
    description: 'Dropdown label for sorting by date (newest)',
  },
  sortByDateOldest: {
    id: 'authoring.selectvideomodal.sort.dateoldest.label',
    defaultMessage: 'cũ nhất',
    description: 'Dropdown label for sorting by date (oldest)',
  },
  sortByNameAscending: {
    id: 'authoring.selectvideomodal.sort.nameascending.label',
    defaultMessage: 'tên A–Z',
    description: 'Dropdown label for sorting by name (ascending)',
  },
  sortByNameDescending: {
    id: 'authoring.selectvideomodal.sort.namedescending.label',
    defaultMessage: 'tên Z–A',
    description: 'Dropdown label for sorting by name (descending)',
  },
  sortByDurationShortest: {
    id: 'authoring.selectvideomodal.sort.durationshortest.label',
    defaultMessage: 'ngắn nhất',
    description: 'Dropdown label for sorting by duration (shortest)',
  },
  sortByDurationLongest: {
    id: 'authoring.selectvideomodal.sort.durationlongest.label',
    defaultMessage: 'dài nhất',
    description: 'Dropdown label for sorting by duration (longest)',
  },

  // Video status labels
  videoStatusAny: {
    id: 'authoring.selectvideomodal.videostatusnone.label',
    defaultMessage: 'Mọi trạng thái',
    description: 'Label for video status (any status)',
  },
  videoStatusUploading: {
    id: 'authoring.selectvideomodal.videostatusuploading.label',
    defaultMessage: 'Đang tải lên',
    description: 'Label for video status (uploading)',
  },
  videoStatusProcessing: {
    id: 'authoring.selectvideomodal.videostatusprocessing.label',
    defaultMessage: 'Đang xử lý',
    description: 'Label for video status (processing)',
  },
  videoStatusReady: {
    id: 'authoring.selectvideomodal.videostatusready.label',
    defaultMessage: 'Sẵn sàng',
    description: 'Label for video status (ready)',
  },
  videoStatusFailed: {
    id: 'authoring.selectvideomodal.videostatusfailed.label',
    defaultMessage: 'Thất bại',
    description: 'Label for video status (failed)',
  },

  // Hide switch
  hideSelectedCourseVideosSwitchLabel: {
    id: 'authoring.selectvideomodal.switch.hideselectedcoursevideos.label',
    defaultMessage: 'Ẩn các video đã chọn của khóa học',
    description: 'Switch label for hide selected course videos',
  },

  // Errors
  selectVideoError: {
    id: 'authoring.selectvideomodal.error.selectVideoError',
    defaultMessage: 'Hãy chọn một video để tiếp tục.',
    description:
      'Message presented to user when clicking Next without selecting a video',
  },
  fileSizeError: {
    id: 'authoring.selectvideomodal.error.fileSizeError',
    defaultMessage:
      'Video phải có dung lượng tối đa 10 MB. Vui lòng giảm kích thước tệp và thử lại.',
    description:
      'Message presented to user when file size of video is larger than 10 MB',
  },
  uploadVideoError: {
    id: 'authoring.selectvideomodal.error.uploadVideoError',
    defaultMessage: 'Không thể tải video lên. Vui lòng thử lại.',
    description: 'Message presented to user when video fails to upload',
  },
  fetchVideosError: {
    id: 'authoring.selectvideomodal.error.fetchVideosError',
    defaultMessage: 'Không thể lấy danh sách video của khóa học. Vui lòng thử lại.',
    description: 'Message presented to user when videos are not found',
  },
};

export default messages;
