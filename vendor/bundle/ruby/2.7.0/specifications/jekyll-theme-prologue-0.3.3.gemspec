# -*- encoding: utf-8 -*-
# stub: jekyll-theme-prologue 0.3.3 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-theme-prologue".freeze
  s.version = "0.3.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["HTML5 UP".freeze, "Chris Bobbe".freeze]
  s.date = "2018-08-22"
  s.description = "A Jekyll version of the Prologue theme by HTML5 UP. Demo: https://chrisbobbe.github.io/jekyll-theme-prologue/".freeze
  s.email = ["csbobbe@gmail.com".freeze]
  s.homepage = "https://github.com/chrisbobbe/jekyll-theme-prologue".freeze
  s.licenses = ["CC-BY-3.0".freeze]
  s.rubygems_version = "3.1.3".freeze
  s.summary = "A Jekyll version of the Prologue theme by HTML5 UP.".freeze

  s.installed_by_version = "3.1.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<jekyll>.freeze, ["~> 3.3"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 1.12"])
  else
    s.add_dependency(%q<jekyll>.freeze, ["~> 3.3"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
  end
end
