import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.group-configurations.experiment-configuration.title',
    defaultMessage: 'Cấu hình nhóm thử nghiệm',
    description: 'Tiêu đề cho trang hiển thị các cấu hình nhóm thử nghiệm.',
  },
  addNewGroup: {
    id: 'course-authoring.group-configurations.experiment-group.add-new-group',
    defaultMessage: 'Cấu hình nhóm mới',
    description: 'Nhãn cho nút thêm cấu hình nhóm thử nghiệm mới.',
  },
  experimentConfigurationName: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name',
    defaultMessage: 'Tên cấu hình nhóm',
    description: 'Nhãn cho ô nhập tên cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationId: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.id',
    defaultMessage: 'ID cấu hình nhóm {id}',
    description: 'Nhãn hiển thị ID của cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationNameFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.feedback',
    defaultMessage: 'Tên hoặc mô tả ngắn cho cấu hình.',
    description: 'Gợi ý cho ô nhập tên/mô tả ngắn của cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationNamePlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.placeholder',
    defaultMessage: 'Đây là tên của cấu hình nhóm',
    description: 'Placeholder cho ô nhập tên cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.required',
    defaultMessage: 'Cần nhập tên cấu hình nhóm.',
    description: 'Thông báo lỗi khi thiếu tên cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationDescription: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description',
    defaultMessage: 'Mô tả',
    description: 'Nhãn cho ô nhập mô tả của cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationDescriptionFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.feedback',
    defaultMessage: 'Mô tả chi tiết (không bắt buộc).',
    description: 'Gợi ý cho ô nhập mô tả cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationDescriptionPlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.placeholder',
    defaultMessage: 'Đây là mô tả cho cấu hình nhóm',
    description: 'Placeholder cho ô nhập mô tả cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationGroups: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups',
    defaultMessage: 'Các nhóm',
    description: 'Nhãn cho phần hiển thị các nhóm trong một cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationGroupsFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.feedback',
    defaultMessage: 'Tên các nhóm mà sinh viên sẽ được phân vào, ví dụ: Đối chứng, Video, Bài tập. Bạn phải có ít nhất hai nhóm.',
    description: 'Gợi ý cho phần nhóm trong cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationGroupsNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.required',
    defaultMessage: 'Mỗi nhóm phải có tên.',
    description: 'Thông báo lỗi khi thiếu tên của một nhóm trong cấu hình thử nghiệm.',
  },
  experimentConfigurationGroupsNameUnique: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.unique',
    defaultMessage: 'Mỗi nhóm phải có tên duy nhất.',
    description: 'Thông báo lỗi khi tên các nhóm trong cấu hình thử nghiệm trùng nhau.',
  },
  experimentConfigurationGroupsRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.required',
    defaultMessage: 'Phải có ít nhất một nhóm.',
    description: 'Thông báo lỗi khi chưa có nhóm nào trong cấu hình thử nghiệm.',
  },
  experimentConfigurationGroupsTooltip: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.tooltip',
    defaultMessage: 'Xóa',
    description: 'Tooltip cho hành động xóa trong phần nhóm của cấu hình thử nghiệm.',
  },
  experimentConfigurationGroupsAdd: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.add',
    defaultMessage: 'Thêm nhóm khác',
    description: 'Nhãn cho nút thêm nhóm mới trong phần nhóm của cấu hình thử nghiệm.',
  },
  experimentConfigurationDeleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.delete.restriction',
    defaultMessage: 'Không thể xóa khi đang được một thử nghiệm sử dụng',
    description: 'Thông báo lỗi khi không thể xóa cấu hình nhóm vì đang được thử nghiệm sử dụng.',
  },
  experimentConfigurationCancel: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.cancel',
    defaultMessage: 'Hủy',
    description: 'Nhãn cho nút Hủy trong cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationSave: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.save',
    defaultMessage: 'Lưu',
    description: 'Nhãn cho nút Lưu trong cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationCreate: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.create',
    defaultMessage: 'Tạo',
    description: 'Nhãn cho nút Tạo trong cấu hình nhóm thử nghiệm.',
  },
  experimentConfigurationAlert: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.alert',
    defaultMessage: 'Cấu hình này hiện đang được sử dụng trong các thử nghiệm nội dung. Nếu bạn thay đổi các nhóm, bạn có thể sẽ cần chỉnh sửa lại các thử nghiệm đó.',
    description: 'Cảnh báo khi cấu hình nhóm thử nghiệm đang được dùng trong các thử nghiệm nội dung.',
  },
  emptyExperimentGroup: {
    id: 'course-authoring.group-configurations.experiment-card.empty-experiment-group',
    defaultMessage: 'Cấu hình nhóm này chưa được sử dụng. Hãy bắt đầu bằng cách thêm một thử nghiệm nội dung vào bất kỳ Đơn vị (Unit) nào thông qua {outlineComponentLink}.',
    description: 'Thông báo khi cấu hình nhóm thử nghiệm chưa được dùng và gợi ý thêm thử nghiệm nội dung.',
  },
  courseOutline: {
    id: 'course-authoring.group-configurations.experiment-card.course-outline',
    defaultMessage: 'Dàn ý khóa học',
    description: 'Nhãn cho phần dàn ý khóa học trong thẻ thử nghiệm.',
  },
  actionEdit: {
    id: 'course-authoring.group-configurations.experiment-card.action.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'Nhãn cho hành động chỉnh sửa trong thẻ thử nghiệm.',
  },
  actionDelete: {
    id: 'course-authoring.group-configurations.experiment-card.action.delete',
    defaultMessage: 'Xóa',
    description: 'Nhãn cho hành động xóa trong thẻ thử nghiệm.',
  },
  subtitleModalDelete: {
    id: 'course-authoring.group-configurations.experiment-card.delete-modal.subtitle',
    defaultMessage: 'cấu hình nhóm',
    description: 'Phụ đề trong hộp thoại xóa, cho biết loại thực thể đang bị xóa.',
  },
  deleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-card.delete-restriction',
    defaultMessage: 'Không thể xóa khi vẫn đang được một đơn vị sử dụng',
    description: 'Thông báo lỗi khi không thể xóa thẻ thử nghiệm vì đang được một đơn vị sử dụng.',
  },
});

export default messages;
