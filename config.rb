###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end

activate :blog do |blog|
	# set options on blog
	blog.name = "blog"
	blog.permalink = "blog/{category}/{title}"
	blog.layout = "blog"
	blog.sources = "blog/:title.html"
	blog.paginate = true
	blog.generate_year_pages = true
	blog.page_link = "p{num}"
	blog.per_page = 2
	blog.default_extension = ".markdown"
end


#page "/services/*", :layout => "services"

activate :directory_indexes


helpers do
  def is_page_active(page)
    current_page.url == page ? 'class="is-active"' : ''
  end
end
