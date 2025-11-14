import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  siteTitle: {
    id: 'legacy-libraries-migration.site-title',
    defaultMessage: 'Di chuyển Legacy Libraries',
    description: 'Tiêu đề cho trang di chuyển legacy libraries.',
  },
  cancel: {
    id: 'legacy-libraries-migration.button.cancel',
    defaultMessage: 'Hủy',
    description: 'Nhãn nút để hủy quá trình di chuyển.',
  },
  next: {
    id: 'legacy-libraries-migration.button.next',
    defaultMessage: 'Tiếp theo',
    description: 'Nhãn nút để chuyển sang bước kế tiếp của quá trình di chuyển.',
  },
  back: {
    id: 'legacy-libraries-migration.button.back',
    defaultMessage: 'Quay lại',
    description: 'Nhãn nút để quay lại bước trước của quá trình di chuyển.',
  },
  confirm: {
    id: 'legacy-libraries-migration.button.confirm',
    defaultMessage: 'Xác nhận',
    description: 'Nhãn nút để xác nhận việc di chuyển.',
  },
  selectLegacyLibrariesStepTitle: {
    id: 'legacy-libraries-migration.select-legacy-libraries-step.title',
    defaultMessage: 'Chọn Legacy Libraries',
    description: 'Tiêu đề bước chọn Legacy Libraries.',
  },
  selectDestinationStepTitle: {
    id: 'legacy-libraries-migration.select-destination-step.title',
    defaultMessage: 'Chọn đích đến',
    description: 'Tiêu đề bước chọn thư viện đích.',
  },
  confirmStepTitle: {
    id: 'legacy-libraries-migration.confirm-step.title',
    defaultMessage: 'Xác nhận',
    description: 'Tiêu đề bước xác nhận.',
  },
  exitModalTitle: {
    id: 'legacy-libraries-migration.exit-modal.title',
    defaultMessage: 'Thoát khỏi quá trình di chuyển?',
    description: 'Tiêu đề hộp thoại xác nhận thoát khỏi quá trình di chuyển.',
  },
  exitModalBodyText: {
    id: 'legacy-libraries-migration.exit-modal.body',
    defaultMessage: 'Nếu thoát, mọi thay đổi sẽ bị mất và sẽ không có thư viện nào được di chuyển.',
    description: 'Nội dung hộp thoại xác nhận thoát khỏi quá trình di chuyển.',
  },
  exitModalCancelText: {
    id: 'legacy-libraries-migration.exit-modal.button.cancel.text',
    defaultMessage: 'Tiếp tục di chuyển',
    description: 'Nhãn nút để đóng hộp thoại và tiếp tục quá trình di chuyển.',
  },
  exitModalConfirmText: {
    id: 'legacy-libraries-migration.exit-modal.button.confirm.text',
    defaultMessage: 'Thoát',
    description: 'Nhãn nút để xác nhận thoát khỏi quá trình di chuyển.',
  },
  selectDestinationAlert: {
    id: 'legacy-libraries-migration.select-destination.alert.text',
    defaultMessage: 'Toàn bộ nội dung từ {count, plural, one {legacy library} other {{count} legacy libraries}} '
      + 'bạn đã chọn sẽ được di chuyển sang thư viện mới này và được tổ chức theo các bộ sưu tập (collection). '
      + 'Nội dung legacy library đang được dùng trong các khóa học vẫn sẽ tiếp tục hoạt động như hiện tại. '
      + 'Để nhận được các thay đổi trong tương lai của nội dung đã di chuyển, bạn cần cập nhật lại các tham chiếu '
      + 'tới nội dung đó trong khóa học của mình.',
    description: 'Thông báo ở bước chọn đích đến trên trang di chuyển legacy libraries.',
  },
  confirmationViewAlert: {
    id: 'legacy-libraries-migration.select-destination.alert.text',
    defaultMessage: 'Toàn bộ nội dung từ {count, plural, one {legacy library} other {{count} legacy libraries}} '
      + 'bạn đã chọn sẽ được di chuyển sang Content Library mà bạn chọn và được tổ chức theo các bộ sưu tập. '
      + 'Nội dung legacy library đang được dùng trong các khóa học vẫn sẽ tiếp tục hoạt động như hiện tại. '
      + 'Để nhận được các thay đổi trong tương lai của nội dung đã di chuyển, bạn cần cập nhật lại các tham chiếu '
      + 'tới nội dung đó trong khóa học của mình.',
    description: 'Thông báo ở bước xác nhận trên trang di chuyển legacy libraries.',
  },
  previouslyMigratedAlert: {
    id: 'legacy-libraries-migration.confirmation-step.card.previously-migrated.text',
    defaultMessage: 'Thư viện này đã được di chuyển trước đó. Mọi liên kết tới ngân hàng bài tập (problem bank) '
      + 'đã được chuyển sẽ được di chuyển sang <b>{libraryName}</b>.',
    description: 'Thông báo khi legacy library đã được di chuyển trước đó.',
  },
  helpAndSupportTitle: {
    id: 'legacy-libraries-migration.helpAndSupport.title',
    defaultMessage: 'Trợ giúp & Hỗ trợ',
    description: 'Tiêu đề cho sidebar Trợ giúp & Hỗ trợ.',
  },
  helpAndSupportFirstQuestionTitle: {
    id: 'legacy-libraries-migration.helpAndSupport.q1.title',
    defaultMessage: 'Điều gì khác biệt trong trải nghiệm Content Libraries mới?',
    description: 'Tiêu đề câu hỏi đầu tiên trong sidebar Trợ giúp & Hỗ trợ.',
  },
  helpAndSupportFirstQuestionBody: {
    id: 'legacy-libraries-migration.helpAndSupport.q1.body',
    defaultMessage: 'Trong trải nghiệm Content Libraries mới, bạn có thể biên soạn các phần (section), '
      + 'mục con (subsection), đơn vị (unit) và nhiều loại thành phần khác nhau. Nội dung trong thư viện có thể '
      + 'được tái sử dụng trên nhiều khóa học và luôn được cập nhật. Content libraries mới cũng hỗ trợ cộng tác '
      + 'tốt hơn giữa các nhóm biên soạn.',
    description: 'Nội dung câu hỏi đầu tiên trong sidebar Trợ giúp & Hỗ trợ.',
  },
  helpAndSupportSecondQuestionTitle: {
    id: 'legacy-libraries-migration.helpAndSupport.q2.title',
    defaultMessage: 'Điều gì xảy ra khi tôi di chuyển Legacy Libraries?',
    description: 'Tiêu đề câu hỏi thứ hai trong sidebar Trợ giúp & Hỗ trợ.',
  },
  helpAndSupportSecondQuestionBody: {
    id: 'legacy-libraries-migration.helpAndSupport.q2.body',
    defaultMessage: 'Toàn bộ nội dung legacy library đều được hỗ trợ trong trải nghiệm mới. '
      + 'Nội dung từ các legacy libraries sẽ được di chuyển vào một bộ sưu tập riêng trong Content Libraries mới. '
      + 'Bộ sưu tập này sẽ có cùng tên với thư viện gốc của bạn. Các khóa học đang sử dụng nội dung legacy library '
      + 'vẫn sẽ hoạt động bình thường, được liên kết tới phiên bản đã di chuyển trong trải nghiệm thư viện mới.',
    description: 'Nội dung câu hỏi thứ hai trong sidebar Trợ giúp & Hỗ trợ.',
  },
  helpAndSupportThirdQuestionTitle: {
    id: 'legacy-libraries-migration.helpAndSupport.q3.title',
    defaultMessage: 'Làm thế nào để tôi di chuyển Legacy Libraries?',
    description: 'Tiêu đề câu hỏi thứ ba trong sidebar Trợ giúp & Hỗ trợ.',
  },
  helpAndSupportThirdQuestionBody: {
    id: 'legacy-libraries-migration.helpAndSupport.q3.body.2',
    defaultMessage: '<p>Có ba bước để di chuyển legacy libraries:</p>'
      + '<p><div>1 - Chọn Legacy Libraries</div>'
      + 'Bạn có thể chọn tối đa 50 legacy libraries để di chuyển trong bước này. Mặc định, chỉ hiển thị những thư viện '
      + 'chưa được di chuyển. Để xem tất cả thư viện, hãy bỏ bộ lọc. '
      + 'Bạn có thể chọn tối đa 50 legacy libraries cho một lần di chuyển, nhưng chỉ chọn được một '
      + 'Content Library v2 làm đích đến cho mỗi lần di chuyển.</p>'
      + '<p><div>2 - Chọn đích đến</div>'
      + 'Bạn có thể di chuyển legacy libraries sang một Content Library hiện có trong trải nghiệm mới, '
      + 'hoặc tạo một thư viện đích mới. Bạn chỉ có thể chọn một Content Library v2 cho mỗi lần di chuyển. '
      + 'Toàn bộ nội dung của bạn sẽ được di chuyển và được tổ chức theo các bộ sưu tập.</p>'
      + '<p><div>3 - Xác nhận</div>'
      + 'Trong bước này, hãy xem lại cấu hình di chuyển của bạn. Khi bạn xác nhận, quá trình di chuyển sẽ bắt đầu '
      + 'và có thể mất một thời gian để hoàn tất.</p>',
    description: 'Phần 2 nội dung câu hỏi thứ ba trong sidebar Trợ giúp & Hỗ trợ.',
  },
  migrationInProgress: {
    id: 'legacy-libraries-migration.confirmation-step.toast.migration-in-progress',
    defaultMessage: '{count, plural, one {{count} legacy library đang được di chuyển} other {{count} legacy libraries đang được di chuyển}}.',
    description: 'Thông báo toast cho biết các legacy libraries đang được di chuyển.',
  },
  migrationFailed: {
    id: 'legacy-libraries-migration.confirmation-step.toast.migration-failed',
    defaultMessage: 'Quá trình di chuyển legacy libraries đã thất bại.',
    description: 'Thông báo toast cho biết việc di chuyển legacy libraries bị lỗi.',
  },
  migrationFailedMultiple: {
    id: 'legacy-libraries-migration.confirmation-step.toast.migration-multiple-failed',
    defaultMessage: 'Nhiều legacy libraries đã bị lỗi khi di chuyển.',
    description: 'Thông báo toast cho biết nhiều legacy libraries bị lỗi khi di chuyển.',
  },
  migrationFailedOneLibrary: {
    id: 'legacy-libraries-migration.confirmation-step.toast.migration-one-failed',
    defaultMessage: 'Legacy library với khóa sau đã bị lỗi khi di chuyển: {key}',
    description: 'Thông báo toast cho biết một legacy library cụ thể bị lỗi khi di chuyển.',
  },
  migrationSuccess: {
    id: 'legacy-libraries-migration.confirmation-step.toast.migration-success',
    defaultMessage: 'Quá trình di chuyển legacy libraries đã hoàn tất thành công.',
    description: 'Thông báo toast cho biết việc di chuyển legacy libraries đã hoàn thành.',
  },
});

export default messages;
