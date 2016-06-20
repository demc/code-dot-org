# == Schema Information
#
# Table name: levels
#
#  id                       :integer          not null, primary key
#  game_id                  :integer
#  name                     :string(255)      not null
#  created_at               :datetime
#  updated_at               :datetime
#  level_num                :string(255)
#  ideal_level_source_id    :integer
#  solution_level_source_id :integer
#  user_id                  :integer
#  properties               :text(65535)
#  type                     :string(255)
#  md5                      :string(255)
#  published                :boolean          default(FALSE), not null
#  notes                    :text(65535)
#  tts_updated_at           :datetime
#
# Indexes
#
#  index_levels_on_game_id  (game_id)
#

class ExternalLink < Level
  serialized_attrs %w(
    link_title
    url
  )

  validates_presence_of :url
  validates_presence_of :link_title

  def icon
    'fa-external-link-square'
  end

  before_validation do
    unless url.try(:match, /https?:\/\//)
      url.prepend 'http://'
    end
  end

  def self.create_from_level_builder(params, level_params)
    create!(level_params.merge(user: params[:user], game: Game.external_link, level_num: 'custom'))
  end
end
