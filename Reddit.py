"""
Getting Reddit comments using PRAW
"""
import time
import praw

r = praw.Reddit('Search for specific Reddit comments for VistaSearch')
length = len(sys.argv)
comments = r.search(sys.argv[length - 1], 'all', 'new', limit = 10)

return [str(x) for x in comments] 
