import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  addNewGroup: {
    id: 'course-authoring.group-configurations.content-groups.add-new-group',
    defaultMessage: 'Nhóm nội dung mới',
    description: 'Nhãn cho nút thêm nhóm nội dung mới.',
  },
  newGroupHeader: {
    id: 'course-authoring.group-configurations.content-groups.new-group.header',
    defaultMessage: 'Tên nhóm nội dung *',
    description: 'Tiêu đề cho ô nhập tên nhóm nội dung mới.',
  },
  newGroupInputPlaceholder: {
    id: 'course-authoring.group-configurations.content-groups.new-group.input.placeholder',
    defaultMessage: 'Đây là tên của nhóm',
    description: 'Placeholder cho ô nhập tên nhóm nội dung mới.',
  },
  invalidMessage: {
    id: 'course-authoring.group-configurations.content-groups.new-group.invalid-message',
    defaultMessage: 'Mỗi nhóm phải có một tên duy nhất.',
    description: 'Thông báo lỗi khi tên nhóm nội dung mới không là duy nhất.',
  },
  cancelButton: {
    id: 'course-authoring.group-configurations.content-groups.new-group.cancel',
    defaultMessage: 'Hủy',
    description: 'Nhãn cho nút Hủy khi tạo nhóm nội dung mới.',
  },
  deleteButton: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.delete',
    defaultMessage: 'Xóa',
    description: 'Nhãn cho nút Xóa khi chỉnh sửa nhóm nội dung.',
  },
  createButton: {
    id: 'course-authoring.group-configurations.content-groups.new-group.create',
    defaultMessage: 'Tạo',
    description: 'Nhãn cho nút Tạo khi tạo nhóm nội dung mới.',
  },
  saveButton: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.save',
    defaultMessage: 'Lưu',
    description: 'Nhãn cho nút Lưu khi chỉnh sửa nhóm nội dung.',
  },
  requiredError: {
    id: 'course-authoring.group-configurations.content-groups.new-group.required-error',
    defaultMessage: 'Tên nhóm là bắt buộc',
    description: 'Thông báo lỗi khi chưa nhập tên nhóm nội dung.',
  },
  alertGroupInUsage: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.alert-group-in-usage',
    defaultMessage: 'Nhóm nội dung này đang được sử dụng trong một hoặc nhiều đơn vị.',
    description: 'Cảnh báo khi cố xóa một nhóm nội dung đang được dùng bởi một hoặc nhiều đơn vị.',
  },
  deleteRestriction: {
    id: 'course-authoring.group-configurations.content-groups.delete-restriction',
    defaultMessage: 'Không thể xóa khi vẫn đang được một đơn vị sử dụng',
    description: 'Thông báo cho biết không thể xóa nhóm nội dung vì đang được sử dụng.',
  },
  emptyContentGroups: {
    id: 'course-authoring.group-configurations.container.empty-content-groups',
    defaultMessage: 'Trong {outlineComponentLink}, hãy dùng nhóm này để kiểm soát quyền truy cập vào một thành phần.',
    description: 'Thông báo khi chưa có nhóm nội dung nào, gợi ý cách dùng trong dàn ý khóa học.',
  },
  courseOutline: {
    id: 'course-authoring.group-configurations.container.course-outline',
    defaultMessage: 'Dàn ý khóa học',
    description: 'Nhãn cho liên kết tới dàn ý khóa học.',
  },
  actionEdit: {
    id: 'course-authoring.group-configurations.container.action.edit',
    defaultMessage: 'Chỉnh sửa',
    description: 'Nhãn cho hành động chỉnh sửa trong container.',
  },
  actionDelete: {
    id: 'course-authoring.group-configurations.container.action.delete',
    defaultMessage: 'Xóa',
    description: 'Nhãn cho hành động xóa trong container.',
  },
  subtitleModalDelete: {
    id: 'course-authoring.group-configurations.container.delete-modal.subtitle',
    defaultMessage: 'nhóm nội dung',
    description: 'Chuỗi mô tả loại thực thể đang bị xóa trong hộp thoại xóa.',
  },
});

export default messages;
